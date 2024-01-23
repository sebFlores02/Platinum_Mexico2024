import Image from "next/image";
import Boletin from "../../components/BoletinCardPlatinum";

function page() {
  let quality = 10;

  return (
    <main className="px-20">
      <h1 className="pt-[140px] pb-[20px] px-[10px] font-medium text-[50px] text-center">
        Nuestros Boletines
      </h1>

      <section className="mx-auto gap-10 flex flex-wrap justify-center w-full my-3">
        <Boletin
          img={"BoletinVersa.jpeg"}
          title={"Boletín 1"}
          description={"Boletín técnico aplicación Nissan Versa"}
        />
        <Boletin
          img={"Instalacion.jpeg"}
          title={"Boletín 2"}
          description={"Guia de instalación"}
        />
        <Boletin
          img={"Garantia.jpeg"}
          title={"Boletín 3"}
          description={"Garantía"}
        />
        <Boletin
          img={"FallaSoluciones1.jpeg"}
          title={"Boletín 4"}
          description={
            "Parte 1 Procedimiento para revision de fallas y soluciones del embrague"
          }
        />
        <Boletin
          img={"Fallas2.jpeg"}
          title={"Boletín 5"}
          description={
            "Parte 2 Procedimiento para revision de fallas y soluciones del embrague"
          }
        />
        <Boletin
          img={"BoletinA1A2A3.jpeg"}
          title={"Boletín 6"}
          description={
            "Boletin tecnico aplicaciones vehiculos VW linea A1, A2, A3"
          }
        />
        <Boletin
          img={"BoletinNissan.jpeg"}
          title={"Boletín 7"}
          description={
            " Boletín de aplicaciones para vehiculos Nissan 2.5 LTS gasolina y diesel"
          }
        />
        <Boletin
          img={"Fallas2.jpeg"}
          title={"Boletín 8"}
          description={"Especificaciones para rectificado de volantes"}
        />
      </section>
    </main>
  );
}

export default page;
