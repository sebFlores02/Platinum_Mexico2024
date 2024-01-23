import Image from "next/image";

function page() {
  return (
    <main className="px-40">
      <h1>Kits</h1>

      <section className=" flex flex-col items-center mt-5 mb-16">
        <section>
          <Image
            quality={80}
            src="/NS73-3.jpeg"
            alt="NS73-3"
            width={300}
            height={300}
          />
        </section>
        <ul className="list-disc leading-[50px] text-lg mt-7">
          <li>
            Diseño, funcionamiento y características óptimos para reemplazo de
            equipo original.
          </li>
          <li>
            Fabricados con componentes de calidad y alta resistencia, tratados
            térmicamente y acabados con precisión.
          </li>
          <li>Kits con accesorios y componentes incluidos.</li>
          <li>
            Tenemos las aplicaciones de mayor rotación para servicio ligero y
            diésel rango medio.
          </li>
        </ul>
      </section>

      <h1>También te puede interesar</h1>

      <section className="flex justify-center gap-10 mb-20 mt-10">
        <a href="/Productos/Plato">
          <article className="py-10 px-16 flex flex-col items-center border border-gray-300 rounded-md">
            <Image
              quality={100}
              src="/NS73-3.png"
              alt="NS73-3"
              width={200}
              height={200}
            />
            <h3 className="font-medium text-[35px] mb-3">Plato</h3>
            <button className="bg-naranja py-4 px-7 rounded-lg">
              Mas información
            </button>
          </article>
        </a>

        <a href="/Productos/Disco">
          <article className="py-10 px-16 flex flex-col items-center border border-gray-300 rounded-md">
            <Image
              quality={100}
              src="/NS73-3.png"
              alt="NS73-3"
              width={200}
              height={200}
            />
            <h3 className="font-medium text-[35px] mb-3">Disco</h3>
            <button className="bg-naranja py-4 px-7 rounded-lg">
              Mas información
            </button>
          </article>
        </a>
      </section>
    </main>
  );
}

export default page;
