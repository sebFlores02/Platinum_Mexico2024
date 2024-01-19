import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[url('/Background.png')] bg-cover w-full h-[100vh]">
      <nav className="flex justify-between px-20">
        <Image
          src="/LOGOPlatinum.png"
          width={200}
          height={200}
          alt="Logo Mel Abogados"
        />
        <ul className="flex justify-between items-center list-none font-medium text-white text-[20px] gap-10">
          <li>
            <a href="/SobreNosotros">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/Contacto">Contacto</a>
          </li>
        </ul>
      </nav>
      <main className="content">
        <div className="left_platinum">
          <h3 className="title_brand">Clutches</h3>
          <Image
            src="/CajaPlatinum.png"
            width={40}
            height={40}
            alt="Logo Mel Abogados"
            className="py-[40px]"
          />
          {/* <button className='btn_landingPage'>Conoce Más</button> */}
          <a href="/platinum">
            <button class="button-6" role="button">
              Conoce Más
            </button>
          </a>
        </div>
        <div className="right_delphi">
          <h3 className="title_brand">Suspensión</h3>
          <Image
            src="/CajaDelphi.png"
            width={40}
            height={40}
            alt="Logo Mel Abogados"
            className="py-[40px]"
          />
          <a href="/delphi">
            <button class="button-6" role="button">
              Conoce Más
            </button>
          </a>
        </div>
      </main>
      <div className="socialMedia">
        <a href="https://www.facebook.com/PlatinumDrivelineMx/" target="_blank">
          <Image
            src="/facebook.png"
            width={35}
            height={35}
            alt="Logo Mel Abogados"
            className="cursor-pointer"
          />
        </a>
        {/* <img className='social_media_icon' src={insta} /> */}
        <a href="https://wa.me/4423455370" target="_blank">
          <Image
            src="/whatsapp.png"
            width={35}
            height={35}
            alt="Logo Mel Abogados"
            className="cursor-pointer"
          />
        </a>
      </div>
    </main>
  );
}
