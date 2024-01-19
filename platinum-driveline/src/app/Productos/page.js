import Image from "next/image";

function page() {
  let quality = 80;

  return (
    <main>
      <h1>Nuestra Calidad</h1>
      <section className="nuestraCalidad__division">
        <article className="nuestraCalidad__programa">
          <Image
            quality={`${quality}`}
            src="/CajaPlatinum.png"
            alt="Boletin #1"
            width={360}
            height={300}
            className=""
          />
          <h3>Introducción del Programa</h3>
          <p>
            Con una experiencia de más de 2 décadas, nuestro portafolio de
            embrague ha madurado en un programa de 8 fábricas, con certificación
            ISO/TS16949.
          </p>
          <section className="space">
            <p>
              Ofrecemos un programa completo para Aftermarket siguiendo la pauta
              de OEM, bajo especificaciones de cada fabricante de Equipo
              Original.
            </p>
            <ul>
              <li>Plato y Disco</li>
              <li>Collarín Mecánico o Collarín Hidráulico (CSC)</li>
            </ul>
            <p>
              Componentes Elaborados con materia prima de alta calidad,
              maquinaria de última tecnología y los más elevados estándares.
            </p>
          </section>
        </article>
        <article className="nuestraCalidad__pruebas">
          <Image
            quality={`${quality}`}
            src="/SelloNaranja.jpeg"
            alt="Boletin #1"
            width={360}
            height={300}
            className=""
          />
          <h3>Pruebas</h3>
          <p>
            Durante el proceso de fabricación del plato y el disco, los
            componentes son sometidos a rigurosos procedimientos: prueba de
            resistencia y dureza, de fatiga y rendimiento hasta 5 millones de
            ciclos, pruebas de balance, de resistencia a altas temperaturas, de
            compresión, pruebas de torsión, prueba final del conjunto de
            embrague en banco de ensamble, según protocolos QCT25 y QCT27-2014.
          </p>
        </article>
      </section>

      <div className="margin_top">
        <h1>Nuestros Productos</h1>
      </div>

      <section className="nuestrosProductos__row">
        <article className="nuestrosProductos__individualProducto">
          <a href="/InfoKit">
            <h2 className="prueba__texto">Kits + CSC</h2>
            <p className="prueba_texto_dos">Mas información</p>
            <div className="division__imagenes">
              <Image
                quality={`${quality}`}
                src="/VW03-2.jpeg"
                alt="Boletin #1"
                width={360}
                height={300}
                className=""
              />
              <Image
                quality={`${quality}`}
                src="/VW03-2.jpeg"
                alt="Boletin #1"
                width={360}
                height={300}
                className=""
              />
            </div>
          </a>
        </article>
      </section>

      <h1>Nuestros Componentes</h1>

      <section className="nuestrosProductos__row">
        <article className="nuestrosProductos__individualDos">
          <a href="/InfoPlato">
            <h2 className="prueba__texto">Plato</h2>
            <p className="prueba_texto_dos">Mas información</p>
            <Image
              quality={`${quality}`}
              src="/VW03-2.jpeg"
              alt="Boletin #1"
              width={360}
              height={300}
              className=""
            />
          </a>
        </article>

        <article className="nuestrosProductos__individual">
          <a href="/InfoDisco">
            <h2 className="prueba__texto">Disco</h2>
            <p className="prueba_texto_dos">Mas información</p>
            <Image
              quality={`${quality}`}
              src="/NS73-3.jpeg"
              alt="Kit NS73-3"
              width={360}
              height={300}
              className=""
            />
          </a>
        </article>
      </section>
    </main>
  );
}

export default page;
