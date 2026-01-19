"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import ChatBot from "./ChatBot";

export default function ClientLayout() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [showChat, setShowChat] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show ChatBot only on certain pages
  useEffect(() => {
    if (pathname.includes("/ai-services")) {
      setShowChat(true);
    } else {
      setShowChat(false);
    }
  }, [pathname]);

  // Debug client-side effect
  useEffect(() => {
    console.log("Client-side code running");
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1E2S2FY962"
        strategy="afterInteractive"
      />
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1E2S2FY962');
        `}
      </Script>

      {/* ChatBot */}
      {showChat && <ChatBot />}

      {/* Optional: hidden scroll info for debugging */}
      <div style={{ display: "none" }}>{/* ScrollY: {scrollY} */}</div>
    </>
  );
}
