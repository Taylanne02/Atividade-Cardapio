# Perguntas do Passo 1

## 1- O que ficou repetitivo no código?
Ficou repetitiva a parte onde os itens do cardápio são adicionados dentro do 'const menu', porque cada item precisa ter nome e preço escritos manualmente.


## 2- Se a lanchonete tivesse 30 intens, o que aconteceria?
Teria que adicionar os 30 itens no 'const menu', o que não seria uma boa prática, pois deixaria o código com muitas linhas de itens, dificultando sua organização no futuro.

# Perguntas do Passo 2

## 1- O código ficou maior ou menor?
Ficou menor e mais organizado, porque o componente <ItemCardapio /> pode ser reutilizado várias vezes.

## 2- Se você mudar a cor de fundo do <ItemCardapio />, quantos lugares precisa alterar?
Só precisa alterar em um lugar, no arquivo do componente <ItemCardapio />.

## 3- Como os dados (nome, preço) chegaram dentro do componente? 
Através do chamado 'props', que está presente no arquivo 'App.jsx'
