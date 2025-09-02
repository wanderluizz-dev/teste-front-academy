import cronogramaImg from "../assets/images/02 1.png"; // imagem da seção
import olimpiadaImg from "../assets/images/Olimpiada-trilice-fronteira.svg"; // Logo da Olimpíada

function SectionCronograma() {

  return (

    <section className="pt-2 md:px-30 px-10 bg-[#EDEDED]">

      <div class="md:grid md:grid-flow-col md:grid-cols-4 md:grid-rows-4 sm:grid-cols-1 sm:grid-rows-1">

        <div class="md:col-span-2 md:row-span-2 w-full sm:row-span-1 sm:col-span-1">
              <img
                src={olimpiadaImg}
                alt="Logo Olimpíada"
                className="justify-start" 
              />
        </div>

        <div class="pt-10 md:col-span-2 md:row-span-2 md:mr-12 sm:row-span-1">

          <div>
            <p className="font-dosis md:text-left text-center">
              Uma olimpíada para alunos e professores da região das fronteiras entre Argentina,
               Brasil e Paraguai que querem colocar suas ideias sobre desenvolvimento sustentável 
               em prática!
            </p>
          </div>
          
          <div className="pt-6">
              <h3 className="font-dosis font-bold text-blue-700 md:text-left text-center">
                CRONOGRAMA
              </h3>
              <p className="pt-4 font-dosis text-gray-600 mb-8 md:text-left text-center">
                Inscrições: <b>até 26 de novembro</b> <br/>
                Entrega dos projetos: <b>25 e 26 de novembro</b> <br/>
                Divulgação dos finalistas: <b>28 de novembro</b> <br/>
                Apresentação final: <b>02 de dezembro</b> 
              </p>
          </div>

        </div>

        <div class="md:pt-12 md:col-span-2 md:row-span-4 sm:row-span-1 pb-12"> 
              <img
                src={cronogramaImg}
                alt="Cronograma"
                className="md:absolute md:justify-start"
              />
        </div>
      </div>

    </section>
  );
}

export default SectionCronograma;