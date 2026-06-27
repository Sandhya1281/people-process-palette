import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PeopleProcess: Business Psychology in Action — MenteSquare" },
      { name: "description", content: "India's first business psychology programme for young professionals. People. Performance. Possibilities." },
      { property: "og:title", content: "PeopleProcess: Business Psychology in Action" },
      { property: "og:description", content: "People. Performance. Possibilities. — Applied business psychology by MenteSquare, Bengaluru." },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [html, setHtml] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    fetch("/peopleprocess.html")
      .then((r) => r.text())
      .then(setHtml)
      .catch(() => setHtml("<p style='padding:24px;font-family:sans-serif'>Failed to load.</p>"));
  }, []);

  return (
    <iframe
      ref={iframeRef}
      title="PeopleProcess landing page"
      srcDoc={html ?? ""}
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
