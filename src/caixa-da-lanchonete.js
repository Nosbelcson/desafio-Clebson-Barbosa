class CaixaDaLanchonete {
    static calcularValorDaCompra(pedido, formaDePagamento) {
      const cardapio = {
        cafe: { descricao: 'Café', valor: 3.00 },
        chantily: { descricao: 'Chantily (extra do Café)', valor: 1.50 },
        suco: { descricao: 'Suco Natural', valor: 6.20 },
        sanduiche: { descricao: 'Sanduíche', valor: 6.50 },
        queijo: { descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
        salgado: { descricao: 'Salgado', valor: 7.25 },
        combo1: { descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
        combo2: { descricao: '1 Café e 1 Sanduíche', valor: 7.50 },
      };
  
      const descontoDinheiro = 0.05;
      const acrescimoCredito = 0.03;
  
      if (!pedido.length) {
        return 'Não há itens no carrinho de compra!';
      }
  
      let total = 0;
      let temItemPrincipal = false;
  
      for (const item of pedido) {
        if (!cardapio[item.codigo]) {
          return 'Item inválido!';
        }
  
        if (item.codigo !== 'chantily' && item.codigo !== 'queijo') {
          temItemPrincipal = true;
        }
  
        total += cardapio[item.codigo].valor * item.quantidade;
      }
  
      if (!temItemPrincipal) {
        return 'Item extra não pode ser pedido sem o principal';
      }
  
      if (formaDePagamento === 'dinheiro') {
        total = total - (total*descontoDinheiro);
      } else if (formaDePagamento === 'credito') {
        total= total + (total*acrescimoCredito);
      } else if (formaDePagamento !== 'debito') {
        return 'Forma de pagamento inválida!';
      }
  
      return total.toFixed(2);
    }
}
    
    export { CaixaDaLanchonete };
