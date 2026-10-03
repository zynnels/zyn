
const cfg = window.LZ_STORE;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => new Intl.NumberFormat('pt-PT',{style:'currency',currency:'EUR'}).format(n);
let cart = JSON.parse(localStorage.getItem('lz-cart-v4') || '[]');
let activeProduct = null;
let chosenSize = null;
let currentFilter = 'todos';

function matchesFilter(product, filter){
  if(filter === 'todos') return true;
  return product.type === filter || product.gender === filter;
}

function renderProducts(filter='todos'){
  currentFilter = filter;
  const list = cfg.products.filter(p => matchesFilter(p, filter));
  $('#productGrid').innerHTML = list.map((p,i)=>`
    <article class="product-card reveal" data-id="${p.id}">
      <span class="product-index">${String(i+1).padStart(2,'0')}</span>
      <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="product-meta">
        <div><h3>${p.name}</h3><p>${p.type} / ${p.gender} / ${p.color}</p></div>
        <div class="product-price">${money(p.price)}</div>
      </div>
    </article>`).join('');

  $$('.product-card').forEach(card => card.onclick = () => openProduct(card.dataset.id));
  attachReveal();
}
renderProducts();

$$('.filter').forEach(btn => btn.onclick = () => {
  $$('.filter').forEach(x => x.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(btn.dataset.filter);
});

$$('[data-scroll]').forEach(btn => btn.onclick = () => {
  document.querySelector(btn.dataset.scroll).scrollIntoView({behavior:'smooth'});
});

$$('[data-filter-jump]').forEach(btn => btn.onclick = () => {
  document.querySelector('#catalogo').scrollIntoView({behavior:'smooth'});
  const f = btn.dataset.filterJump;
  setTimeout(() => document.querySelector(`.filter[data-filter="${f}"]`).click(), 450);
});

function openProduct(id){
  activeProduct = cfg.products.find(p => p.id === id); chosenSize = null;
  $('#modalImage').src = activeProduct.image;
  $('#modalName').textContent = activeProduct.name;
  $('#modalType').textContent = `${activeProduct.type} / ${activeProduct.gender} / ${activeProduct.color}`;
  $('#modalPrice').textContent = money(activeProduct.price);
  $('#modalDesc').textContent = activeProduct.description;
  $('#sizeGrid').innerHTML = activeProduct.sizes.map(s => `<button class="size-btn" data-size="${s}">${s}</button>`).join('');
  $$('.size-btn').forEach(btn => btn.onclick = () => {
    $$('.size-btn').forEach(x=>x.classList.remove('selected'));
    btn.classList.add('selected');
    chosenSize = btn.dataset.size;
  });
  $('#productModal').classList.add('open');
  $('#backdrop').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal(){ $('#productModal').classList.remove('open'); }
function closeCart(){ $('#cartDrawer').classList.remove('open'); }
function closeOverlayIfNone(){
  if(!$('#productModal').classList.contains('open') && !$('#cartDrawer').classList.contains('open')){
    $('#backdrop').classList.remove('show');
    document.body.style.overflow = '';
  }
}
function closeAll(){ closeModal(); closeCart(); $('#backdrop').classList.remove('show'); document.body.style.overflow = ''; }
$('#modalClose').onclick = () => { closeModal(); closeOverlayIfNone(); };
$('#closeCart').onclick = () => { closeCart(); closeOverlayIfNone(); };
$('#backdrop').onclick = closeAll;

$('#modalAdd').onclick = () => {
  if(!chosenSize){
    const btn = $('#modalAdd');
    btn.textContent = 'ESCOLHA UM TAMANHO';
    setTimeout(()=>btn.textContent='ADICIONAR AO CARRINHO', 1200);
    return;
  }
  const cartId = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : String(Date.now());
  cart.push({...activeProduct, size: chosenSize, cartId});
  saveCart();
  closeAll();
  openCart();
};

function saveCart(){ localStorage.setItem('lz-cart-v4', JSON.stringify(cart)); renderCart(); }
function renderCart(){
  $('#cartCount').textContent = cart.length;
  $('#cartEmpty').style.display = cart.length ? 'none' : 'block';
  $('#cartItems').innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="">
      <div><h4>${item.name}</h4><small>${item.size} / ${item.color}</small><p>${money(item.price)}</p></div>
      <button data-remove="${item.cartId}">×</button>
    </div>`).join('');
  $('#cartTotal').textContent = money(cart.reduce((sum,item)=>sum+item.price,0));
  $$('[data-remove]').forEach(btn => btn.onclick = () => { cart = cart.filter(item => String(item.cartId)!==String(btn.dataset.remove)); saveCart(); });
}
renderCart();
function openCart(){ renderCart(); $('#cartDrawer').classList.add('open'); $('#backdrop').classList.add('show'); document.body.style.overflow = 'hidden'; }
$('#cartBtn').onclick = openCart;

function openSearch(){ $('#searchOverlay').classList.add('open'); searchProducts(''); setTimeout(()=>$('#searchInput').focus(), 120); }
function closeSearch(){ $('#searchOverlay').classList.remove('open'); $('#searchInput').value = ''; }
$('#searchBtn').onclick = openSearch;
$('#closeSearch').onclick = closeSearch;
$('#searchInput').oninput = e => searchProducts(e.target.value);
function searchProducts(query=''){
  const list = cfg.products.filter(p => `${p.name} ${p.type} ${p.gender} ${p.color}`.toLowerCase().includes(query.toLowerCase()));
  $('#searchResults').innerHTML = list.map(p => `
    <div class="search-item" data-search-id="${p.id}">
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <span>${money(p.price)}</span>
    </div>`).join('');
  $$('[data-search-id]').forEach(el => el.onclick = () => { closeSearch(); openProduct(el.dataset.searchId); });
}

function attachReveal(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); obs.unobserve(entry.target);} });
  }, {threshold:.12});
  $$('.reveal').forEach(el=>obs.observe(el));
}
attachReveal();

window.addEventListener('keydown', e => { if(e.key === 'Escape'){ closeAll(); closeSearch(); }});
const cursorGlow = $('#cursorGlow');
window.addEventListener('pointermove', e => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});
