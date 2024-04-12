"use client";
import { LetterBoxProps } from "@/types/component";
import { msgs } from "@/utils/message";
import { useState } from "react";
import Swal, { SweetAlertResult } from "sweetalert2";

export default function LetterBox(props: LetterBoxProps) {
  const { isBoxOpen, handleOpenBox } = props;
  const [isSending, setIsSending] = useState<boolean>(false);

  function handelWish(e: any) {
    e.preventDefault();
    e.stopPropagation();
    Swal.fire({
      title: "Message",
      html: '<textarea placeholder="Message here..." id="wish" name="text" rows="4" style="overflow: hidden; word-wrap: break-word; resize: none; height: 160px; "></textarea> ',
      focusConfirm: false,
      preConfirm: () => {
        const wish = (
          Swal.getPopup()?.querySelector("#wish") as HTMLInputElement
        ).value;

        const data = wish.trim();

        if (!data || data === "") {
          Swal.showValidationMessage(`Jangan kirim pesan kosong sayang`);
        }

        return { data };
      },
    }).then(async (result: SweetAlertResult<{ data: string }>) => {
      if (result.isConfirmed) {
        setIsSending(true);
        // Di sini Anda dapat menggunakan data yang diisi dalam form
        const data = {
          name: "Raisya Ariana Asfriansah",
          message: result.value?.data,
        };

        const response = await fetch("/api", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const dataResponse = await response.json();
        console.log(dataResponse);
        setIsSending(false)

        // Contoh tindakan lainnya setelah form dikirim
        Swal.fire(
          "Pesann udaaa kekirimmm, makasi ya cantikkkk!!!",
          "",
          "success"
        );
      }
    });
  }

  return (
    <div
      className={"letter box" + (isBoxOpen ? " show" : "")}
      onClick={(e) => {
        e.preventDefault();
        handleOpenBox(false);
      }}
    >
      {msgs.map((msg, i) => (
        <p key={i} className="msg">
          {msg}
        </p>
      ))}
      <div>
        <ul className="pantun">
          <li>Pergi makan bihun</li>
          <li>Pake baju batik</li>
          <li>Selamat ulang tahun</li>
          <li>Raisya Cantik</li>
        </ul>
      </div>
      <button
        className={`btn-wish ${isSending ? "disable" : ""}`}
        onClick={handelWish}
        disabled={isSending}
      >
        Message
      </button>
    </div>
  );
}
