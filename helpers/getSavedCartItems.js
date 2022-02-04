const getSavedCartItems = (cartItems) => {
  // seu código aqui
  localStorage.getItem(cartItems);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
