"use client";
import { useEffect } from "react";

export default function TranslateBox() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="container mx-auto mt-16 px-5">
      <div className="rounded-3xl overflow-hidden shadow-xl border mt-10 p-5 bg-white">
        <div id="google_translate_element"></div>
      </div>
    </div>
  );
}
