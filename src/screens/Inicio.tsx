import NavBar from "../components/Comunes/NavBar";
import gimnasio from "../img/gimnasio.jpg"
import logoDosTintas from "../img/LogoCetysBlanco.png"
const Inicio = () => {
  return (
    <div>
      <div className="bg-emerald-800 h-96">slider imagenes</div>
      <div className="bg-amber-500 h-[400px] flex flex-row grid-cols-2">
        <div className="w-[50%] flex flex-col space-y-1 ">
          <h1 className="text-6xl mt-8 mb-4 mx-16 text-left">RackDAT</h1>
          <p className="text-2xl mx-8 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt neque excepturi similique, porro fugiat distinctio libero voluptas quibusdam repellat, tenetur totam est tempora minima facilis iste. Recusandae numquam tempore earum tenetur rem quam rerum et debitis dolorem asperiores amet ullam exercitationem minus suscipit odit, voluptas neque? Ipsum, et ad. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quia natus voluptatem aspernatur labore laborum doloribus rem repellendus. Provident, aperiam?</p>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src={gimnasio} alt="Gimnasio CETYS" className="h-[80%] w-[90%] object-cover" />
        </div>
      </div>
      <div className="">prestamos</div>
      <div>botones de ayuda</div>
      <footer className="bg-black h-28 flex items-center">
        <img src={logoDosTintas} alt="Logo CETYS Universidad" className="h-24 py-4 px-6" />
      </footer>
    </div>
  );
};

export default Inicio;
