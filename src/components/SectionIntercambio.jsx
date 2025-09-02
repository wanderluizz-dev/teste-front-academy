import lupaImg from "../assets/images/03 1.png"; // Imagem Lupa

function SectionIntercambio() {

    return (
  
      <section className="md:px-30 px-10 bg-[#EDEDED]">
  
        <div class="py-16 md:grid md:grid-flow-col md:grid-cols-4 md:grid-rows-6 sm:grid-cols-1 sm:grid-rows-1">
  
          <div class="col-span-2 row-span-2 md:text-left text-center">
            <h1 className="font-work-sans font-extrabold text-gray-900 md:text-6xl text-5xl">
                Intercâmbio de aprendizados
            </h1>
          </div>
  
          <div class="md:pt-4 pt-12 col-span-2 row-span-4 md:mr-12 pb-12 md:pb-0">

            <p className="font-dosis text-gray-900 mb-8 md:text-left text-center md:text-base text-2xl pb-8 md:pb-0">
            Chegamos à Tríplice Fronteira para celebrar a expansão das olimpíadas do 
            Instituto Vertere para os países de língua espanhola da América do Sul!
            </p>

            <div className="rounded-2xl bg-[#5287DD] md:mr-12">

                <p className="font-work-sans font-extrabold text-white p-4 text-center md:text-base text-2xl">
                    Inscrições abertas até 24 de novembro
                </p>

            </div>

            <a href="">
                <p className="font-work-sans font-extrabold text-gray-900 underline p-4 md:text-left text-center md:text-base text-2xl">
                 Acesse o regulamento
                </p>
            </a>
  
          </div>
  
          <div class="md:col-span-2 md:row-span-6 pb-12 md:mr-12">
            <img
                src={lupaImg}
                alt="Lupa"
                className="h-full"
            />
          </div>
        </div>
  
      </section>
    );
  }
  
  export default SectionIntercambio;