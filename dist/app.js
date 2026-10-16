'use strict';

const PRODUCTS = {
  renova: {name:'ankor RENOVA',price:33000,variant:'44137163817136',format:'60 капсул',image:'./assets/renova-editorial.jpg',alt:'Флаконы и капсулы Ankor RENOVA',tag:'Природный комплекс облепихи',description:'Твёрдое облепиховое масло в капсулах. Формула на основе природных компонентов, разработанная с применением технологии ТОМ К-90®.',composition:'Масло какао, твёрдое облепиховое масло. Оболочка капсулы: очищенная вода, крахмал тапиоки, глицерин.',url:'https://ankor.life/products/масло-облепихи-ankor-renova'},
  detox: {name:'ankor DETOX',price:16000,variant:'44137795846320',format:'20 саше по 10 г',image:'./assets/detox-editorial.jpg',alt:'Упаковка и саше Ankor DETOX',tag:'Облепиха и шиповник',description:'Растительный продукт на основе облепихи и шиповника. Порционные саше удобно хранить и брать с собой.',composition:'Растительные компоненты облепихи и шиповника. Полный состав и рекомендации по применению указаны на упаковке и странице продукта.',url:'https://ankor.life/products/энтеросорбент-ankor-detox'}
};
const money = value => new Intl.NumberFormat('ru-KZ').format(value) + ' ₸';
const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const cartKey = 'ankor-redesign-cart-v1';
let cart = {};
try {const saved = JSON.parse(localStorage.getItem(cartKey) || '{}');for(const key of Object.keys(PRODUCTS)){if(Number.isInteger(saved?.[key]) && saved[key]>0) cart[key]=Math.min(saved[key],99);}} catch {cart={};}
let toastTimer;
const dialogs = [...document.querySelectorAll('dialog')];
const productDialog = document.getElementById('product-dialog');
const cartDialog = document.getElementById('cart-dialog');
const compareDialog = document.getElementById('compare-dialog');
function showDialog(dialog) {dialogs.forEach(other=>{if(other!==dialog && other.open) other.close();});if(!dialog.open)dialog.showModal();document.body.classList.add('dialog-open');}
dialogs.forEach(dialog=>{
  dialog.addEventListener('close',()=>{if(!dialogs.some(item=>item.open))document.body.classList.remove('dialog-open');});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom)dialog.close();}});
  dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
});

function showProduct(key) {
  const p=PRODUCTS[key];if(!p)return;
  document.getElementById('product-dialog-content').innerHTML=`<div class="detail-grid"><div class="detail-image"><img src="${p.image}" alt="${p.alt}"></div><div class="detail-content"><p class="eyebrow">${p.tag}</p><h2 id="detail-title">${p.name}</h2><p class="detail-format">${p.format}</p><p class="detail-description">${p.description}</p><h3>Что внутри</h3><p class="detail-composition">${p.composition}</p><div class="product-bottom"><div class="price">${money(p.price)}</div><button class="button button-primary" data-add="${key}">В корзину ${icon('plus')}</button></div><a class="text-link" href="${p.url}" target="_blank" rel="noopener">Полная информация о продукте ${icon('diagonal')}</a><p class="dialog-footnote">БАД. Не является лекарственным средством. Перед применением ознакомьтесь с инструкцией и проконсультируйтесь со специалистом.</p></div></div>`;
  showDialog(productDialog);
}
function updateCart(){
  let count=0,total=0;
  for(const [key,quantity] of Object.entries(cart)){count+=quantity;total+=PRODUCTS[key].price*quantity;}
  document.querySelectorAll('.cart-count').forEach(el=>el.textContent=count);
  document.querySelector('.bag-button').setAttribute('aria-label',`Открыть корзину: ${count} товаров`);
  document.getElementById('cart-heading-count').textContent=count;
  const holder=document.getElementById('cart-items');
  if(!count){holder.innerHTML=`<div class="empty-cart">${icon('bag')}<h3>Место для заботы о себе</h3><p>Познакомьтесь с продуктами Ankor и добавьте подходящий в корзину.</p><button class="button button-primary" id="continue-shopping">Выбрать продукт ${icon('arrow')}</button></div>`;}
  else{holder.innerHTML=Object.entries(cart).map(([key,quantity])=>{const p=PRODUCTS[key];return `<article class="cart-item"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p class="cart-item-format">${p.format}</p><span class="cart-item-price">${money(p.price*quantity)}</span><div class="cart-item-actions"><div class="quantity"><button data-quantity="${key}" data-change="-1" aria-label="Уменьшить количество ${p.name}">${icon('minus')}</button><span aria-label="Количество">${quantity}</span><button data-quantity="${key}" data-change="1" ${quantity>=99?'disabled':''} aria-label="Увеличить количество ${p.name}">${icon('plus')}</button></div><button class="remove-item" data-remove="${key}" aria-label="Удалить ${p.name} из корзины">Удалить</button></div></div></article>`;}).join('');}
  document.getElementById('cart-summary').hidden=!count;
  document.getElementById('cart-total').textContent=money(total);
  document.getElementById('checkout').href=count?'https://ankor.life/cart/'+Object.entries(cart).map(([key,qty])=>PRODUCTS[key].variant+':'+qty).join(','):'https://ankor.life/cart';
  try{localStorage.setItem(cartKey,JSON.stringify(cart));}catch{/* Browsing with storage disabled still supports this session's cart. */}
}
function addProduct(key){
  if(!PRODUCTS[key])return;
  const before=cart[key]||0;
  if(before>=99){showDialog(cartDialog);return;}
  cart[key]=before+1;updateCart();
  if(productDialog.open){productDialog.close();showDialog(cartDialog);return;}
  document.getElementById('toast-message').textContent=PRODUCTS[key].name+' в корзине';
  const toast=document.getElementById('toast');toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),4500);
}
document.addEventListener('click',event=>{
  const button=event.target.closest('button');if(!button)return;
  if(button.hasAttribute('data-product'))showProduct(button.dataset.product);
  if(button.hasAttribute('data-add'))addProduct(button.dataset.add);
  if(button.hasAttribute('data-cart-open')){document.getElementById('toast').classList.remove('visible');showDialog(cartDialog);}
  if(button.hasAttribute('data-compare') || button.id==='compare-open')showDialog(compareDialog);
  if(button.hasAttribute('data-quantity')){const key=button.dataset.quantity;if(!PRODUCTS[key])return;cart[key]=Math.min(99,(cart[key]||0)+Number(button.dataset.change));if(cart[key]<=0)delete cart[key];updateCart();const replacement=cartDialog.querySelector(`[data-quantity="${key}"][data-change="${button.dataset.change}"]`);(replacement||cartDialog.querySelector('[data-close]')).focus();}
  if(button.hasAttribute('data-remove')){delete cart[button.dataset.remove];updateCart();cartDialog.querySelector('[data-close]').focus();}
  if(button.id==='continue-shopping'){cartDialog.close();document.getElementById('products').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
});
const menuButton=document.querySelector('.menu-button');
const mobileNav=document.getElementById('mobile-nav');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Открыть меню');mobileNav.hidden=true;}
menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!expanded));menuButton.setAttribute('aria-label',expanded?'Открыть меню':'Закрыть меню');mobileNav.hidden=expanded;});
mobileNav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.addEventListener('click',event=>{if(!event.target.closest('.header')&&!mobileNav.hidden)closeMenu();});
document.querySelectorAll('.faq-list details').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open)document.querySelectorAll('.faq-list details').forEach(other=>{if(other!==detail)other.open=false;});}));
window.addEventListener('storage',event=>{if(event.key!==cartKey)return;try{const next=JSON.parse(event.newValue||'{}');cart={};for(const key of Object.keys(PRODUCTS)){if(Number.isInteger(next?.[key])&&next[key]>0)cart[key]=Math.min(next[key],99);}updateCart();}catch{/* Ignore invalid data from another tab. */}});
document.getElementById('year').textContent=new Date().getFullYear();
updateCart();
