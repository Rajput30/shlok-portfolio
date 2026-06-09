// app/page.js
"use client";
import dynamic from "next/dynamic";

// Disable SSR for the portfolio (uses canvas, window, video)
const ShlokPortfolio = dynamic(() => import("../components/ShlokPortfolio"), {
  ssr: false,
  loading: () => (
    <div style={{
      height: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "#02050a", color: "rgba(255,255,255,0.2)",
      fontFamily: "monospace", fontSize: "12px", letterSpacing: "4px",
    }}>
      LOADING...
    </div>
  ),
});

export default function Home() {
  return <ShlokPortfolio />;
}
