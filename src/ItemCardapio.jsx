function ItemCardapio(props) {
  return (
    <li style={{ marginBottom: "10px" }}>
      <strong>{props.nome}</strong> - {props.preco}

      <button onClick={props.adicionar} style={{ marginLeft: "10px" }}>
        Adicionar ao pedido
      </button>
    </li>
  );
}

export default ItemCardapio;