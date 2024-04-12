"use client";
import LetterBox from "@/components/LetterBox";
import Wrapper from "@/components/Wrapper";
import { useLetter } from "@/utils/state";

export default function Home() {
  const { isEnvelopeOpen, setIsEnvelopeOpen } = useLetter();
  return (
    <div className="app">
      <div style={{ position: "relative" }}>
        <Wrapper />
        <LetterBox />
      </div>
      <button
        className="btn-open"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsEnvelopeOpen(!isEnvelopeOpen);
        }}
      >
        {isEnvelopeOpen ? "Close" : "Open"}
      </button>
    </div>
  );
}
