import lupaImg from "../assets/images/03 1.png"; // Imagem Lupa

function SectionIntercambio() {

    return (
  
      <section className="px-30 bg-[#EDEDED]">
  
        <div class="pt-22 grid grid-flow-col grid-cols-4 grid-rows-6">
  
          <div class="col-span-2 row-span-2">
            <h1 className="font-work-sans font-extrabold text-gray-900 text-6xl">
                Intercâmbio de aprendizados
            </h1>
          </div>
  
          <div class="pt-4 col-span-2 row-span-4 mr-24">

            <p className="font-dosis text-gray-900 mb-8 mr-24">
            Chegamos à Tríplice Fronteira para celebrar a expansão das olimpíadas do 
            Instituto Vertere para os países de língua espanhola da América do Sul!
            </p>

            <div className=" rounded-2xl bg-[#5287DD] mr-32">

                <p className="font-work-sans font-extrabold text-white p-4 text-center">
                    Inscrições abertas até 24 de novembro
                </p>

            </div>

            <a href="">
                <p className="font-work-sans font-extrabold text-gray-900 underline p-4 text-left">
                 Acesse o regulamento
                </p>
            </a>
  
          </div>
  
          <div class="col-span-2 row-span-6 pb-12">
            <img
                src={lupaImg}
                alt="Lupa"
                className="justify-start h-full"
            />
          </div>
        </div>
  
      </section>
    );
  }
  
  export default SectionIntercambio;