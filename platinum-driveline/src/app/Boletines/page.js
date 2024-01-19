import Image from "next/image";

function page() {
  let quality = 10;

  return (
    <main className="px-20">
      <h1 className="pt-[140px] pb-[20px] px-[10px] font-medium text-[50px] text-center">
        Nuestros Boletines
      </h1>

      <section className="mx-auto gap-10 flex flex-wrap justify-center w-full my-3">
        <a href="/BoletinVersa.jpeg" download>
          <article className="border border-black max-w-[365px] min-h-[480px] rounded-[8px]">
            <Image
              quality={`${quality}`}
              src="/BoletinVersa.jpeg"
              alt="Boletin #1"
              width={360}
              height={300}
              className="max-w-[362px] rounded-t-lg border-b border-black"
            />
            <section className="px-5 py-4">
              <h3 className="font-medium text-[24px]">Boletín 1</h3>
              <h5 className="mt-4 mb-4 leading-7">
                Boletín técnico aplicación Nissan Versa
              </h5>
            </section>
          </article>
        </a>

        <a href="/images-buena/guiainstalacion.jpg" download>
          <article className="border border-black max-w-[365px] min-h-[480px] rounded-[8px]">
            <Image
              quality={`${quality}`}
              src="/Instalacion.jpeg"
              alt="Boletin #2"
              width={360}
              height={300}
              className="max-w-[362px] rounded-t-lg border-b border-black"
            />
            <section className="px-5 py-4">
              <h3 className="font-medium text-[24px]">Boletín 2</h3>
              <h5 className="mt-4 mb-4 leading-7">Guia de instalación</h5>
            </section>
          </article>
        </a>
        <a href="/images-buena/boletingarantia.jpg" download>
          <article className="border border-black max-w-[365px] min-h-[480px] rounded-[8px]">
            <Image
              quality={`${quality}`}
              src="/Garantia.jpeg"
              alt="Boletin #3"
              width={360}
              height={300}
              className="max-w-[362px] rounded-t-lg border-b border-black"
            />
            <section className="px-5 py-4">
              <h3 className="font-medium text-[24px]">Boletín 3</h3>
              <h5 className="mt-4 mb-4 leading-7">Garantía</h5>
            </section>
          </article>
        </a>

        <a href="/images-buena/fallas_soluciones_uno.jpg" download>
          <article className="border border-black max-w-[365px] min-h-[480px] rounded-[8px]">
            <Image
              quality={`${quality}`}
              src="/FallaSoluciones1.jpeg"
              alt="Boletin #4"
              width={360}
              height={300}
              className="max-w-[362px] rounded-t-lg border-b border-black"
            />
            <section className="px-5 py-4">
              <h3 className="font-medium text-[24px]">Boletín 4</h3>
              <h5 className="mt-4 mb-4 leading-7">
                Parte 1 Procedimiento para revision de fallas y soluciones del
                embrague
              </h5>
            </section>
          </article>
        </a>

        <a href="/images-buena/fallas_soluciones_dos.jpg" download>
          <article className="border border-black max-w-[365px] min-h-[480px] rounded-[8px]">
            <Image
              quality={`${quality}`}
              src="/Fallas2.jpeg"
              alt="Boletin #5"
              width={360}
              height={300}
              className="max-w-[362px] rounded-t-lg border-b border-black"
            />
            <section className="px-5 py-4">
              <h3 className="font-medium text-[24px]">Boletín 5</h3>
              <h5 className="mt-4 mb-4 leading-7">
                Parte 2 Procedimiento para revision de fallas y soluciones del
                embrague
              </h5>
            </section>
          </article>
        </a>

        <a href="/images-buena/boletinA1A2A3.jpg" download>
          <article className="border border-black max-w-[365px] min-h-[480px] rounded-[8px]">
            <Image
              quality={`${quality}`}
              src="/BoletinA1A2A3.jpeg"
              alt="Boletin #6"
              width={360}
              height={300}
              className="max-w-[362px] rounded-t-lg border-b border-black"
            />
            <section className="px-5 py-4">
              <h3 className="font-medium text-[24px]">Boletín 6</h3>
              <h5 className="mt-4 mb-4 leading-7">
                Boletin tecnico aplicaciones vehiculos VW linea A1, A2, A3
              </h5>
            </section>
          </article>
        </a>

        <a href="/images-buena/aplicaciones_nissan.jpg" download>
          <article className="border border-black max-w-[365px] min-h-[480px] rounded-[8px]">
            <Image
              quality={`${quality}`}
              src="/BoletinNissan.jpeg"
              alt="Boletin #7"
              width={360}
              height={300}
              className="max-w-[362px] rounded-t-lg border-b border-black"
            />
            <section className="px-5 py-4">
              <h3 className="font-medium text-[24px]">Boletín 7</h3>
              <h5 className="mt-4 mb-4 leading-7">
                Boletín de aplicaciones para vehiculos Nissan 2.5 LTS gasolina y
                diesel
              </h5>
            </section>
          </article>
        </a>

        <a href="/images-buena/especifiacionesvolantes1.jpg" download>
          <article className="border border-black max-w-[365px] min-h-[460px] rounded-[8px]">
            <Image
              quality={`${quality}`}
              src="/Fallas2.jpeg"
              alt="Boletin #8"
              width={365}
              height={300}
              className="rounded-t-lg border-b border-black"
            />
            <section className="px-5 py-4">
              <h3 className="font-medium text-[24px]">Boletín 8</h3>
              <h5 className="mt-4 mb-4 leading-7">
                Especificaciones para rectificado de volantes
              </h5>
            </section>
          </article>
        </a>
      </section>
    </main>
  );
}

export default page;
