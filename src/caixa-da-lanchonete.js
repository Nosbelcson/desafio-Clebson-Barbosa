class CaixaDaLanchonete {
  calcularValorDaCompra(formaDePagamento, pedido) {
    const cardapio = {
      cafe: 3.00,
      chantily: 1.50,
      suco: 6.20 ,
      sanduiche: 6.50 ,
      queijo: 2.00 ,
      salgado: 7.25,
      combo1: 9.50 ,
      combo2: 7.50 ,
    };

    if(!(formaDePagamento === 'dinheiro' || formaDePagamento === 'debito' || formaDePagamento === 'credito')){
      return 'Forma de pagamento inválida!'
    }

    const descontoDinheiro = 0.05;
    const acrescimoCredito = 0.03;

    if (pedido.length===0) {
      return 'Não há itens no carrinho de compra!';
    }

    let total = 0;
    let temItemPrincipalCafe = false;
    let temItemPrincipalSanduiche = false;

    for (let i = 0; i < pedido.length; i++) {
      let items = pedido[i]
      let item = items.split(',')

      if (!cardapio[item[0]]) {
        return 'Item inválido!'
      }

      if (parseInt(item[1]) <= 0){
        return 'Quantidade inválida!'
      }

      if (item[0] === 'cafe' || item[0] === 'sanduiche') {
        if (item[0] === 'cafe') {
          temItemPrincipalCafe = true
        }
        if (item[0] === 'sanduiche') {
          temItemPrincipalSanduiche = true
        }
      } else if (item[0] === 'chantily' && !temItemPrincipalCafe) {
        return 'Item extra não pode ser pedido sem o principal'
      } else if (item[0] === 'queijo' && !temItemPrincipalSanduiche) {
        return 'Item extra não pode ser pedido sem o principal'
      }

      total += cardapio[item[0]] * parseInt(item[1])
    }

    if (formaDePagamento === 'dinheiro') {
      total = total - (total * descontoDinheiro)
    } else if (formaDePagamento === 'credito') {
      total = total + (total * acrescimoCredito)
    }

    return `R$ ${total.toFixed(2).replace('.',',')}`;
  }
}

export { CaixaDaLanchonete };
