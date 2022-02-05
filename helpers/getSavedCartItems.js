const getSavedCartItems = () => localStorage.getItem('cartItems');
  // seu código aqui
  
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
