import { LetterBoxProps } from "@/types/component";
import Swal from "sweetalert2";

export default function LetterBox(props: LetterBoxProps) {
  const { isBoxOpen, handleOpenBox } = props;

  function handelWish(e: any) {
    e.preventDefault();
    Swal.fire({
      title: "Your wish",
      html: '<textarea placeholder="Fill your wish here..." id="wish" name="text" rows="4" style="overflow: hidden; word-wrap: break-word; resize: none; height: 160px; "></textarea> ',
      focusConfirm: false,
      preConfirm: () => {
        const wish = Swal.getPopup()?.querySelector(
          "#wish"
        ) as HTMLInputElement;
        const valueWish = wish.value;
        if (!valueWish) {
          Swal.showValidationMessage(`Please enter your wish!`);
        }
        return { data: valueWish };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Di sini Anda dapat menggunakan data yang diisi dalam form
        const data = {
          name: "Raisya Ariana Asfriansah",
          message: result.value.data,
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
        
        // Contoh tindakan lainnya setelah form dikirim
        Swal.fire("Data Sent!", "", "success");
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
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
        delectus cum sint, similique impedit beatae quos laborum culpa aliquid
        tempora! Debitis nemo quod, laboriosam fuga consectetur non? Facere
        molestiae iusto voluptatem totam, labore dolorum illum fuga illo,
        commodi facilis adipisci reiciendis repellendus ea nemo voluptatibus?
        Molestias pariatur vero fugiat nobis excepturi iusto saepe accusantium
        eligendi sit asperiores consectetur cumque, veritatis deserunt dolorum
        odio minus odit consequatur repellat nam? Reprehenderit minus
        perspiciatis similique cumque sapiente distinctio, harum laudantium modi
        explicabo, corporis, molestias vero. Nesciunt commodi soluta velit
        possimus voluptates. Eligendi ipsa cupiditate iusto quaerat expedita
        debitis, consequuntur deserunt, aut saepe consequatur temporibus
        reprehenderit veniam accusamus, in id fugit ipsum ex molestiae
        perferendis assumenda! Possimus cumque iure impedit distinctio
        aspernatur eveniet maxime aut harum excepturi, ullam ex porro velit
        temporibus voluptates nulla dolore sit sunt a veritatis qui sapiente
        voluptatibus dolor optio. Cumque quae aliquam corrupti nulla fuga qui
        exercitationem aut velit veniam, praesentium omnis officia. Eius
        reiciendis repellendus, ipsum nostrum sunt velit suscipit ad temporibus
        ea quibusdam itaque officiis assumenda autem cum. Autem, laudantium
        fuga? Maxime, dignissimos? Soluta, dolor. Mollitia deleniti nam veniam
        architecto, quam harum inventore, ab odit quaerat alias voluptatum
        voluptate reprehenderit expedita cumque vero placeat soluta dicta aut!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas
        velit ipsa libero aliquam inventore facere excepturi consequuntur est
        odio.
      </p>
      <button className="btn-wish" onClick={handelWish}>
        Make a wish
      </button>
    </div>
  );
}
