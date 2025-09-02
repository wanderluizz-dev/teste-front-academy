function SectionButton() {

  return (

    <section className="md:px-30 px-10 bg-[#5287DD]">

      <div class="md:py-22 py-32 flex flex-col text-center">

        <div class="">
          <h1 className="font-work-sans font-extrabold text-white md:text-6xl text-5xl">
              Inscreva-se <br />gratuitamente
          </h1>
        </div>

        <div class="pt-12 md:px-24 px-0">
          <button className="font-dosis text-white border-white border-2 rounded-md px-20 py-4 md:text-2xl text-xl font-bold">
           <a href="">QUERO ME INSCREVER</a>
          </button>
        </div>

      </div>

    </section>
  );
}

export default SectionButton;