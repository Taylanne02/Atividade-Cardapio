import { useState } from "react";
import ItemCardapio from "./ItemCardapio";

function App() {
  const [totalItens, setTotalItens] = useState(0);

  function adicionarAoPedido() {
    setTotalItens(totalItens + 1);
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🍔 Cardápio da Lanchonete</h1>

      <h2>Total de itens no pedido: {totalItens}</h2>

      <ul>
        <ItemCardapio nome="Hambúrguer" preco="R$ 15,00" adicionar={adicionarAoPedido} />
        <ItemCardapio nome="Cheeseburger" preco="R$ 18,00" adicionar={adicionarAoPedido} />
        <ItemCardapio nome="Batata Frita" preco="R$ 10,00" adicionar={adicionarAoPedido} />
        <ItemCardapio nome="Refrigerante" preco="R$ 7,00" adicionar={adicionarAoPedido} />
        <ItemCardapio nome="Milkshake" preco="R$ 12,00" adicionar={adicionarAoPedido} />
      </ul>
    </div>
  );
}

export default App;