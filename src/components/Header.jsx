function Header() {

    return (
      <header className="py-4 md:pr-50 px-10 flex items-center justify-end bg-[#EDEDED]">

        <div><h1 className="pr-6 font-work-sans font-black underline text-gray-900">Idiomas:</h1></div>

        <div>
          <button className="font-work-sans font-black text-gray-900 rounded-full border border-gray-900 p-2 shadow-[4px_4px_0px_#0a0a0a]">PT</button>
          <button className="font-work-sans font-black ml-4 text-gray-900">ES</button>
        </div>

      </header>
    );
  }
  
  export default Header;