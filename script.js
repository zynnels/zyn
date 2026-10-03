
const cfg = window.LZ_STORE;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => new Intl.NumberFormat('pt-PT',{style:'currency',currency:'EUR'}).format(n);

let cart = JSON.parse(localStorage.getItem('lz-cart-v3') || '[]');
let activeProduct = null;
let chosenSize = null;

function renderProducts(filter='todos'){
  const list = filter === 'todos' ? cfg.products : cfg.products.filter(p=>p.gender===filter);
  $('#productGrid').innerHTML = list.map((p,i)=>`
    <article class="product-card" data-id="${p.id}">
      <span class="product-index">${String(i+1).padStart(2,'0')}</span>
      <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="product-meta">
        <div><h3>${p.name}</h3><p>${p.gender} / ${p.color}</p></div>
        <div class="product-price">${money(p.price)}</div>
      </div>
    </article>`).join('');
  $$('.product-card').forEach(c=>c.onclick=()=>openProduct(c.dataset.id));
}
renderProducts();

$$('.filter').forEach(b=>b.onclick=()=>{
  $$('.filter').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); renderProducts(b.dataset.filter);
});

function openProduct(id){
  activeProduct = cfg.products.find(p=>p.id===id); chosenSize = null;
  $('#modalImage').src = activeProduct.image;
  $('#modalName').textContent = activeProduct.name;
  $('#modalGender').textContent = `${activeProduct.gender} / ${activeProduct.color}`;
  $('#modalPrice').textContent = money(activeProduct.price);
  $('#modalDesc').textContent = activeProduct.description;
  $('#sizeGrid').innerHTML = activeProduct.sizes.map(s=>`<button class="size-btn" data-size="${s}">${s}</button>`).join('');
  $$('.size-btn').forEach(b=>b.onclick=()=>{ $$('.size-btn').forEach(x=>x.classList.remove('selected')); b.classList.add('selected'); chosenSize=b.dataset.size; });
  $('#productModal').classList.add('open'); $('#backdrop').classList.add('show'); document.body.style.overflow='hidden';
}
function closeAll(){
  $('#productModal').classList.remove('open');
  $('#cartDrawer').classList.remove('open');
  $('#backdrop').classList.remove('show');
  document.body.style.overflow='';
}
$('#modalClose').onclick=closeAll; $('#closeCart').onclick=closeAll; $('#backdrop').onclick=closeAll;
$('#modalAdd').onclick=()=>{
  if(!chosenSize){ const b=$('#modalAdd'); b.textContent='ESCOLHA UM TAMANHO'; setTimeout(()=>b.textContent='ADICIONAR AO CARRINHO',1200); return; }
  cart.push({...activeProduct,size:chosenSize,cartId:crypto.randomUUID ? crypto.randomUUID() : Date.now()});
  saveCart(); closeAll(); openCart();
};
function saveCart(){localStorage.setItem('lz-cart-v3',JSON.stringify(cart));renderCart();}
function renderCart(){
  $('#cartCount').textContent=cart.length;
  $('#cartEmpty').style.display=cart.length?'none':'block';
  $('#cartItems').innerHTML=cart.map(x=>`<div class="cart-item"><img src="${x.image}" alt=""><div><h4>${x.name}</h4><small>${x.size} / ${x.color}</small><p>${money(x.price)}</p></div><button data-remove="${x.cartId}">×</button></div>`).join('');
  $('#cartTotal').textContent=money(cart.reduce((a,b)=>a+b.price,0));
  $$('[data-remove]').forEach(b=>b.onclick=()=>{cart=cart.filter(x=>String(x.cartId)!==String(b.dataset.remove));saveCart();});
}
renderCart();
function openCart(){renderCart();$('#cartDrawer').classList.add('open');$('#backdrop').classList.add('show');document.body.style.overflow='hidden';}
$('#cartBtn').onclick=openCart;

function searchProducts(q=''){
 const list=cfg.products.filter(p=>(p.name+' '+p.color+' '+p.gender).toLowerCase().includes(q.toLowerCase()));
 $('#searchResults').innerHTML=list.map(p=>`<div class="search-item" data-search-id="${p.id}"><img src="${p.image}" alt=""><h4>${p.name}</h4><span>${money(p.price)}</span></div>`).join('');
 $$('[data-search-id]').forEach(x=>x.onclick=()=>{closeSearch();openProduct(x.dataset.searchId)});
}
function openSearch(){$('#searchOverlay').classList.add('open');searchProducts();setTimeout(()=>$('#searchInput').focus(),150)}
function closeSearch(){$('#searchOverlay').classList.remove('open');$('#searchInput').value=''}
$('#searchBtn').onclick=openSearch;$('#closeSearch').onclick=closeSearch;$('#searchInput').oninput=e=>searchProducts(e.target.value);
window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeAll();closeSearch();}});
