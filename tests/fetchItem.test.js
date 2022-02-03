require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  it('Testa se fetchItem() é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Testa se fetch é chamada se executa fetchItem(`MLB1615760527`)', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se fetch foi chamada com a url correta', () => {
    const url = "https://api.mercadolibre.com/items/MLB1615760527";
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Verifica se a função fetchItem, retorna o objeto correto', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });

  it('Verifica se ao chamar fetchItem() é lançado um erro com a mensagem "You must provide an url"', () => {
    expect(fetchItem()).rejects.toEqual(new Error('You must provide an url'));
  });
});
