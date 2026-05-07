import React from "react";

function App() {
  const menu = [
    { nome: "Hambúrguer", preco: "R$ 15,00" },
    { nome: "Cheeseburger", preco: "R$ 18,00" },
    { nome: "Batata Frita", preco: "R$ 10,00" },
    { nome: "Refrigerante", preco: "R$ 7,00" },
    { nome: "Milkshake", preco: "R$ 12,00" },
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🍔 Cardápio da Lanchonete</h1>
      <ul>
        {menu.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>{item.nome}</strong> - {item.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;