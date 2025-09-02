import logoSapientia from "../assets/images/LOGO SAPIENTIA.svg"; // Logo
import logoVertere from "../assets/images/LOGO INSTITUTO.svg"; // Logo
import logoItaipu from "../assets/images/LOGO ITAIPU.svg"; // Logo
import logoFractal from "../assets/images/LOGO FRACTAL.svg"; // Logo
import logoMinisterio from "../assets/images/MINISTERIO_Prancheta 1 1.png"; // Logo


function Footer() {

    return (
      <footer className="md:px-30 px-10 bg-[#EDEDED]">

         <div class="py-12 grid grid-flow-row grid-cols-8 md:gap-6 gap-4 items-center md:grid-rows-1 grid-rows-4">
  
          <div class="md:col-span-1 col-span-8 md:mr-12">
            <p className="font-dosis font-bold text-gray-900 text-sm md:text-left text-center">
                Realização:
            </p>
          </div>
  
          <div class="md:col-span-1 col-span-3 justify-items-end-safe">
              <img
                  src={logoSapientia}
                  alt="Logo Sapientia"
                  className="h-full"
              />
          </div>
  
          <div class="md:col-span-1 col-span-5">
              <img
                  src={logoVertere}
                  alt="Logo Vertere"
                  className="h-full"
              />
          </div>

          <div class="md:col-span-2 col-span-8 md:pl-24">
            <p className="font-dosis font-bold text-gray-900 text-sm text-center">
                Apoio:
            </p>
          </div>

          <div class="md:col-span-1 col-span-2">
              <img
                  src={logoItaipu}
                  alt="Logo Itaipu"
                  className="h-full"
              />
          </div>

          <div class="md:col-span-1 col-span-2">
              <img
                  src={logoFractal}
                  alt="Logo Fractal"
                  className="h-full"
              />
          </div>

          <div class="md:col-span-1 col-span-4">
              <img
                  src={logoMinisterio}
                  alt="Logo Ministério"
                  className="w-full"
              />
          </div>

        </div>
      </footer>
    )
  }
  
  export default Footer;