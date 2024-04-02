"use client";
import { WrapperProps } from "@/types/component";
import { useState } from "react";

export default function Wrapper(props: WrapperProps) {
  const { handleOpenBox } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className="wrapper"
      onClick={(e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      }}
    >
      <div className={"lid one" + (isOpen ? " show" : "")}></div>
      <div className={"lid two" + (isOpen ? " show" : "")}></div>
      <div className="envelope"></div>
      <div className={"letter" + (isOpen ? " show" : "")} id="letter-envelope">
        <p className="title-envelope">Happy Birthday Raisya</p>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleOpenBox();
          }}
        >
          See more
        </a>
      </div>
    </div>
  );
}
