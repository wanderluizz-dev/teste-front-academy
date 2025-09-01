import Header from "./components/Header.jsx";
import SectionCronograma from "./components/SectionCronograma.jsx";
import SectionInstituto from "./components/SectionInstituto.jsx";
import SectionIntercambio from "./components/SectionIntercambio.jsx";
import SectionButton from "./components/SectionButton.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <main>
        <SectionCronograma />
        <SectionInstituto />
        <SectionIntercambio />
        <SectionButton/>
      </main>
      <Footer />
    </div>
  );
}

export default App;