import Image from "next/image";

function page() {
  return (
    <main className="px-40">
      <h1>Disco</h1>

      <section className="flex justify-between mt-5 mb-16">
        <section className="basis-2/5">
          <Image
            quality={100}
            src="/NS73-3.png"
            alt="NS73-3"
            width={100}
            height={100}
            className="w-[80%]"
          />
        </section>
        <ul className="list-disc leading-10 basis-3/5 text-lg text-justify">
          <li>
            Alta resistencia al desgaste por excelente composición de
            materiales.
          </li>
          <li>Amortiguador torsional templado con acabado anodizado.</li>
          <li>
            Segmentos con tratamiento térmico de alta flexibilidad, ofrecen
            arranques más suaves sin vibraciones y mayor resistencia al
            sobrecalentamiento por abuso en el manejo.
          </li>
          <li>
            Pastas a base de fibras de vidrio aglutinado con resina polimérica
            de primera calidad, que dan fortaleza estructural, combinado con
            metales en un porcentaje mayor a otras marcas en el mercado. Con
            esto se garantiza una respuesta inmediata al desembragar, alto
            coeficiente de fricción y una experiencia de manejo confortable.
          </li>
          <li>
            Pastas ranuradas que generan un flujo de aire entre la superficie y
            la pista de fricción, favoreciendo el enfriamiento de los
            componentes.
          </li>
          <li>
            Eje estriado (estrías) forjado con prueba de dureza, temple y altas
            temperaturas.
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

        <a href="/Productos/Kit">
          <article className="py-10 px-16 flex flex-col items-center border border-gray-300 rounded-md">
            <Image
              quality={100}
              src="/NS73-3.png"
              alt="NS73-3"
              width={200}
              height={200}
            />
            <h3 className="font-medium text-[35px] mb-3">Kits</h3>
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
