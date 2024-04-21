"use client";
import { WrapperProps } from "@/types/component";
import { useLetter } from "@/utils/state";

export default function Wrapper(props: WrapperProps) {
  const { isBoxOpen, setIsBoxOpen, isEnvelopeOpen, setIsEnvelopeOpen } =
    useLetter();

  return (
    <div className="wrapper">
      <div className={"lid one" + (isEnvelopeOpen ? " show" : "")}></div>
      <div className={"lid two" + (isEnvelopeOpen ? " show" : "")}></div>
      <div className="envelope"></div>
      <div
        className={"letter" + (isEnvelopeOpen ? " show" : "")}
        id="letter-envelope"
      >
        <p className="title-envelope">Happy Birthday Raisya</p>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsBoxOpen(!isBoxOpen);
          }}
        >
          Show more
        </a>
      </div>
    </div>
  );
}
