"use client";

import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg"
      >
        {isOpen ? "Close Chat" : "Chat with us"}
      </button>

      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-xl rounded p-4 mt-2">
          <h3 className="font-bold mb-2">Hello! How can I help you?</h3>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="border px-2 py-1 rounded"
            />
            <button className="bg-blue-600 text-white px-2 py-1 rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
