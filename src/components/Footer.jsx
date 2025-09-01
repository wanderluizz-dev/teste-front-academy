import logoSapientia from "../assets/images/LOGO SAPIENTIA.svg"; // Logo
import logoVertere from "../assets/images/LOGO INSTITUTO.svg"; // Logo
import logoItaipu from "../assets/images/LOGO ITAIPU.svg"; // Logo
import logoFractal from "../assets/images/LOGO FRACTAL.svg"; // Logo
import logoMinisterio from "../assets/images/MINISTERIO_Prancheta 1 1.png"; // Logo


function Footer() {

    return (
      <footer className="px-30 bg-[#EDEDED]">

         <div class="py-12 grid grid-flow-col grid-cols-8 gap-6 items-center">
  
          <div class="col-span-1 mr-12">
            <p className="font-dosis font-bold text-gray-900 text-sm text-left">
                Realização:
            </p>
          </div>
  
          <div class="col-span-1">
              <img
                  src={logoSapientia}
                  alt="Logo Sapientia"
                  className="h-full"
              />
          </div>
  
          <div class="col-span-1">
              <img
                  src={logoVertere}
                  alt="Logo Vertere"
                  className="h-full"
              />
          </div>

          <div class="col-span-1">
            
            
          </div>

          <div class="col-span-1 mr-12">
            <p className="font-dosis font-bold text-gray-900 text-sm text-right">
                Apoio:
            </p>
          </div>

          <div class="col-span-1">
              <img
                  src={logoItaipu}
                  alt="Logo Itaipu"
                  className="h-full"
              />
          </div>

          <div class="col-span-1">
              <img
                  src={logoFractal}
                  alt="Logo Fractal"
                  className="h-full"
              />
          </div>

          <div class="col-span-1">
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