const fetchProducts = require('./helpers/fetchProducts');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

function cartItemClickListener(event) {
  // coloque seu código aqui
  const cartList = document.querySelector('.cart_items');
  const element = event.target;
  cartList.removeChild(element);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Daqui para baixo, as funções foram resolvidas com ajuda da monitoria da Ellen Santos

const addItem = async (param) => {
  const cartItems = document.getElementsByClassName('.cart__items');
  const skuElement = param.target.parentNode.firstChild.innerText;
  const item = await fetchItem(skuElement);
  const obj = {
    sku: item.id,
    name: item.title,
    salePrice: item.price,
  };
  cartItems.appendChild(createCartItemElement(obj));
};

const throughItem = async () => { 
  const items = document.getElementsByClassName('.items');
  const products = await fetchProducts('computador');
  products.results.forEach((product) => {
    const obj = {
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
      salePrice: product.price,
    };
    
    items.appendChild(createProductItemElement(obj));
    const btnAdd = document.querySelectorAll('.item__add');
    btnAdd.forEach((button) => {
      button.addEventListener('click', addItem);
    }); 
  });
};

window.onload = async () => {
  await throughItem();
};
