const getSavedCartItems = (name) => {
  // seu código aqui
  localStorage.getItem(name);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
