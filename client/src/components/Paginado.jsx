import "../Styles/Paginado.css";

export default function Paginado({
  pokemonPerPage,
  pokemons1,
  paginado,
  page,
}) {
  const pageNum = [];

  for (let i = 1; i <= Math.ceil(pokemons1 / pokemonPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <div className="nav">
      {pageNum &&
        pageNum.map((num) => (
          <div key={num}>
            <button
              className={num === page ? "btnSel" : "btnNav"}
              onClick={() => paginado(num)}
            >
              {num}
            </button>
          </div>
        ))}
    </div>
  );
}
