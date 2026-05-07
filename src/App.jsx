import ItemCardapio from "./ItemCardapio";

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🍔 Cardápio da Lanchonete</h1>

      <ul>
        <ItemCardapio nome="Hambúrguer" preco="R$ 15,00" />
        <ItemCardapio nome="Cheeseburger" preco="R$ 18,00" />
        <ItemCardapio nome="Batata Frita" preco="R$ 10,00" />
        <ItemCardapio nome="Refrigerante" preco="R$ 7,00" />
        <ItemCardapio nome="Milkshake" preco="R$ 12,00" />
      </ul>
    </div>
  );
}

export default App;