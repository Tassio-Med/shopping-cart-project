require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('verifica se fetchProducts() é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('verifica se fetch foi chamada ao executar fetchProducts', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('verifica se fetch foi chamada com a url esperada', async () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('verifica se o retorno da função fetchProducts é um objeto quando o argumento passado for "computador"', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });

  it('verifica se ao chamar fetchProducts() e não tiver argumento, retorna um erro com a mensagem "You must provide an url"', () => {
    expect(fetchProducts()).rejects.toEqual(new Error('You must provide an url')); // 'Se a promessa é obrigatória, o teste automaticamente falhar.'
  });
});
