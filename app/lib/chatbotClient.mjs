const DEFAULT_TIMEOUT_MS = 15000;

const API_ENDPOINT =
  process.env.NEXT_PUBLIC_CHATBOT_API_ENDPOINT ||
  "https://prod-api.codework.ai/api/v1/chat";

const API_PATH = "/api/v1/chat";

export function parseChatbotResponse(rawText) {
  if (!rawText) {
    return { answer: "", sources: [], followups: [] };
  }

  let data;

  try {
    data = JSON.parse(rawText);
  } catch {
    const lines = rawText
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    const merged = {};

    for (const line of lines) {
      try {
        const obj = JSON.parse(line);
        if (obj && typeof obj === "object") {
          Object.assign(merged, obj);
        }
      } catch {
      }
    }

    if (!Object.keys(merged).length) {
      return { answer: rawText, sources: [], followups: [] };
    }

    data = merged;
  }

  const answer = typeof data.answer === "string" ? data.answer : "";
  const sourcesRaw = Array.isArray(data.sources) ? data.sources : [];
  const sources = sourcesRaw
    .map((item) => {
      if (typeof item === "string") {
        const str = String(item).trim();
        const match = str.match(/^\s*([^:]+)\s*:\s*(.+)$/);
        if (match) {
          const name = String(match[1]).trim();
          const url = String(match[2]).replace(/[`'"]/g, "").trim();
          return { name, url };
        }
        const url = str.replace(/[`'"]/g, "").trim();
        return { name: url, url };
      }
      if (item && typeof item === "object") {
        const name = String(item.name || item.title || item.label || "").trim();
        const url = String(item.url || item.link || "").replace(/[`'"]/g, "").trim();
        if (name || url) {
          return { name: name || url, url };
        }
        return null;
      }
      return null;
    })
    .filter(Boolean);

  let followups = Array.isArray(data.followups) ? data.followups : [];

  followups = followups
    .flatMap((item) =>
      typeof item === "string" ? item.split(/\r?\n+/) : []
    )
    .map((item) => item.trim())
    .filter(Boolean);

  return { answer, sources, followups };
}

export async function callChatbotApi(question, options = {}) {
  const query = typeof question === "string" ? question.trim() : "";

  if (!query) {
    throw new Error("Question must be a non-empty string");
  }

  const controller = new AbortController();

  const timeoutMs =
    typeof options.timeoutMs === "number" && options.timeoutMs > 0
      ? options.timeoutMs
      : DEFAULT_TIMEOUT_MS;

  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const headers = {
    "Content-Type": "application/json",
  };

  const apiKey = process.env.NEXT_PUBLIC_CHATBOT_API_KEY;

  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`;
  }

  let response;

  try {
    response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers,
      body: JSON.stringify({ query, question: query }),
      signal: controller.signal,
    });
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("The chatbot request timed out. Please try again.");
    }
    throw new Error("Unable to reach the chatbot service. Please try again.");
  } finally {
    clearTimeout(timeoutId);
  }

  const text = await response.text();

  if (!response.ok) {
    throw new Error(
      "The chatbot service returned an error. Please try again later."
    );
  }

  return parseChatbotResponse(text);
}
