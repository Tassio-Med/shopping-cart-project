const cartClass = document.querySelector('.cart__items'); // levar para a lista de produtos

function sum() {
  let amount = 0;
  const getItem = document.querySelectorAll('.cart__item'); 
  getItem.forEach((item) => {
    const obj = item.innerText.split(' '); // As linhas 7 e 8, consegui reslver apenas com ajuda da função do Gustavo Santos, Turma 19-B
    const indObj = obj.slice(-1)[0].slice(1);
    amount += Number(indObj);
  });
  const total = document.querySelector('.total-price');
  total.innerText = amount;
}

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

function cartItemClickListener(param) {
  param.target.remove();
  saveCartItems(cartClass.innerHTML);
  sum();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// As funções fetchProdList e fetchItem List consegui resolver apenas com ajuda da monitoria da Ellen

const fetchProdList = async () => { 
  const item = document.querySelector('.items');
  const data = await fetchProducts('computador');
  const obj = data.results;
  obj.forEach((product) => {
    const object = { sku: product.id, name: product.title, image: product.thumbnail };
    item.appendChild(createProductItemElement(object));
  });
 };

const fetchItemList = async (e) => {
  const cartItem = e.target.parentNode.firstChild.innerText;
  const item = await fetchItem(cartItem);
  const obj = { sku: item.id, name: item.title, salePrice: item.price };
  cartClass.appendChild(createCartItemElement(obj));
  saveCartItems(cartClass.innerHTML);
  sum();
};

const addButton = () => {
  const button = document.querySelectorAll('.item__add');
  button.forEach((btn) => {
    btn.addEventListener('click', fetchItemList);
  }); 
  saveCartItems(cartClass.innerHTML);
  sum();
};

const cleanCart = document.querySelector('.empty-cart');
cleanCart.addEventListener('click', () => {
 cartClass.innerHTML = '';
  localStorage.removeItem('cartItems');
  sum();
});

window.onload = async () => {
const loadListProd = () => {
  cartClass.innerHTML = getSavedCartItems();
  cartClass.childNodes.forEach((li) => {
    li.addEventListener('click', cartItemClickListener);
  });
};
  const page = document.querySelector('.loading');
  await fetchProdList();
  page.remove();
  loadListProd();
  addButton();
};