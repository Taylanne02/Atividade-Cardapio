function ItemCardapio(props) {
  return (
    <li>
      <strong>{props.nome}</strong> - {props.preco}
    </li>
  );
}

export default ItemCardapio;