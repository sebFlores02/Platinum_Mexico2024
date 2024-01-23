import Image from "next/image";

function page() {
  return (
    <main className="flex flex-col items-center">
      <h1>Videos</h1>

      <section className="flex flex-wrap justify-evenly mb-5 px-5 gap-2 mx-auto w-[100%]">
        <article>
          <iframe
            className="w-[500px] h-[400px] basis-1/3 mt-3 object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/imRvb8pWkDQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </article>
        <article>
          <iframe
            className="w-[500px] h-[400px] basis-1/3 mt-3 object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6i1dhcKdP-U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </article>

        <article>
          <iframe
            className="w-[500px] h-[400px] basis-1/3 mt-3 object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/85rNBTLvRSI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </article>
        <article>
          <iframe
            className="w-[500px] h-[400px] basis-1/3 mt-3 object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SH-GiPDDGrY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </article>

        <article>
          <iframe
            className="w-[500px] h-[400px] basis-1/3 mt-3 object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ABXHRfTgDOU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </article>
        <article>
          <iframe
            className="w-[500px] h-[400px] basis-1/3 mt-3 object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TD-hNRmhbQU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </article>
      </section>

      <h1 className="text-[50px] mt-[80px] mb-[50px]">Imágenes</h1>

      <section className="flex flex-wrap justify-evenly mb-5 gap-4 px-40 mx-auto w-[100%]">
        <article>
          <Image
            src="/EquipoStand.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-[450px] h-[500px] basis-1/3 mt-3 object-cover"
          />
        </article>
        <article>
          <Image
            src="/productos_display.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-[450px] h-[500px] basis-1/3 mt-3 object-cover"
          />
        </article>

        <article>
          <Image
            src="/mecanicos.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-[450px] h-[500px] basis-1/3 mt-3 object-cover"
          />
        </article>

        <article>
          <Image
            src="/estandExpo.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-[450px] h-[500px] basis-1/3 mt-3 object-cover"
          />
        </article>

        <article>
          <Image
            src="/equipoPlatinum.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-[450px] h-[500px] basis-1/3 mt-3 object-cover"
          />
        </article>

        <article>
          <Image
            src="/testCalidad.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-[450px] h-[500px] basis-1/3 mt-3 object-cover"
          />
        </article>

        <article>
          <Image
            src="/EstandPlatinum2.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-[450px] h-[500px] basis-1/3 mt-3 object-cover"
          />
        </article>

        <article>
          <Image
            src="/EquipoPlatinum2.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-[450px] h-[500px] basis-1/3 mt-3 object-cover"
          />
        </article>

        <article>
          <Image
            src="/ProductoEstand.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-[450px] h-[500px] basis-1/3 mt-3 object-cover"
          />
        </article>
      </section>
    </main>
  );
}

export default page;
