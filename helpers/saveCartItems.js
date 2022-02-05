const saveCartItems = (itemList) => {
  // seu código aqui
  localStorage.setItem('cartItems', itemList);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
