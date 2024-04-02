"use client";
import LetterBox from "@/components/LetterBox";
import Wrapper from "@/components/Wrapper";
import { useState } from "react";

export default function Home() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  return (
    <>
      <Wrapper handleOpenBox={() => setIsBoxOpen(!isBoxOpen)} />
      <LetterBox isBoxOpen={isBoxOpen} handleOpenBox={setIsBoxOpen} />
    </>
  );
}
