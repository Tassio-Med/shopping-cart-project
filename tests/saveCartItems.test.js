const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Testa se ao executar saveCartItems o método localStorage.setItem é chamado', () => {
    saveCartItems('cartItems', "<ol><li>Item</li></ol>");
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Verifica se ao executar saveCartItems, o método localStorage.setItem é chamado com dois parâmetros', () => {
    saveCartItems('cartItems', "<ol><li>Item</li></ol>");
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  }); 
});
