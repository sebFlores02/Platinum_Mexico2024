// import emailjs from "emailjs-com";

// import swal from "sweetalert";

export default function Contacto() {
  //   function success() {
  //     swal({
  //       title: "Excelente!",
  //       text: "Tu mensaje ha sido enviado!",
  //       icon: "success",
  //       button: "OK!",
  //     });
  //   }

  //   function sendEmail(e) {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "prueba",
  //         "template_rh9w2ko",
  //         e.target,
  //         "user_lrwhkl5n5kkelAqkkmphi"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //     e.target.reset();
  //   }

  return (
    <main className="flex flex-col items-center">
      <h1 className="pt-[140px] pb-[20px] px-[10px] font-medium text-[50px] text-center">
        Llene el formulario de Contacto
      </h1>

      <form className="mt-10 w-4/6">
        <fieldset className="flex flex-col ">
          <label className="font-semibold uppercase" for="nombre">
            Nombre
          </label>
          <input
            className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[10px] mb-[20px]"
            type="text"
            placeholder="Tu Nombre"
            id="nombre"
            name="name"
          />

          <label className="font-semibold uppercase" for="email">
            E-mail
          </label>
          <input
            className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[10px] mb-[20px]"
            type="email"
            placeholder="Tu Email"
            id="email"
            name="email"
          />

          <label className="font-semibold uppercase" for="telefono">
            Teléfono
          </label>
          <input
            className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[10px] mb-[20px]"
            type="tel"
            placeholder="Tu Teléfono"
            id="telefono"
            name="phone"
          />

          <label className="font-semibold uppercase" for="mensaje">
            Mensaje:
          </label>
          <textarea
            className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[15px] mb-[25px] h-[180px]"
            id="mensaje"
            name="mensaje"
            placeholder="Ingresa tu mensaje..."
          ></textarea>
        </fieldset>
        <div>
          <input
            type="submit"
            value="Enviar"
            className="bg-naranja font-medium py-4 px-20 rounded-full text-white"
          />
        </div>
      </form>
    </main>
  );
}
