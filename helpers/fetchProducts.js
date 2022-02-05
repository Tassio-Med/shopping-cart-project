const fetchProducts = async (searchItem) => {
  // seu código aqui
  if (!searchItem) throw new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${searchItem}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
