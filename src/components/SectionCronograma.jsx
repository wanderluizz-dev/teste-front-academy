import cronogramaImg from "../assets/images/02 1.png"; // imagem da seção
import olimpiadaImg from "../assets/images/Olimpiada-trilice-fronteira.svg"; // Logo da Olimpíada

function SectionCronograma() {

  return (

    <section className="pt-2 px-30 bg-[#EDEDED]">

      <div class="grid grid-flow-col grid-cols-4 grid-rows-4">

        <div class="col-span-2 row-span-2 w-full ">
              <img
                src={olimpiadaImg}
                alt="Logo Olimpíada"
                className="justify-start" 
              />
        </div>

        <div class="pt-10 col-span-2 row-span-2 mr-6">

          <div>
            <p className="font-dosis">
              Uma olimpíada para alunos e professores da região das fronteiras entre Argentina,
               Brasil e Paraguai que querem colocar suas ideias sobre desenvolvimento sustentável 
               em prática!
            </p>
          </div>
          
          <div className="pt-6">
              <h3 className="font-dosis font-bold text-blue-700">
                CRONOGRAMA
              </h3>
              <p className="pt-4 font-dosis text-gray-600 mb-8">
                Inscrições: <b>até 26 de novembro</b> <br/>
                Entrega dos projetos: <b>25 e 26 de novembro</b> <br/>
                Divulgação dos finalistas: <b>28 de novembro</b> <br/>
                Apresentação final: <b>02 de dezembro</b> 
              </p>
          </div>

        </div>

        <div class="pt-12 col-span-2 row-span-4"> 
              <img
                src={cronogramaImg}
                alt="Cronograma"
                className="absolute justify-start"
              />
        </div>
      </div>

    </section>
  );
}

export default SectionCronograma;