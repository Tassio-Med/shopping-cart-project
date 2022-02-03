const saveCartItems = (cartItem, ListItems) => {
  // seu código aqui
  localStorage.setItem(cartItem, ListItems);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
