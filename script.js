
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const money=n=>new Intl.NumberFormat('pt-PT',{style:'currency',currency:'EUR'}).format(n);
let cfg,products=[],cart=JSON.parse(localStorage.getItem('lz-cart-v6')||'[]'),activeProduct=null,chosenSize=null;

async function init(){
 const r=await fetch('/config.json?ts='+Date.now(),{cache:'no-store'}); cfg=await r.json();
 products=(cfg.products||[]).filter(p=>p.visible!==false);
 applyBrand();renderHero();renderProducts();renderCart();wire();attachReveal();
}
function applyBrand(){
 const b=cfg.brand||{},s=cfg.settings||{};
 $('#heroKicker').textContent=b.heroKicker||'LZ STORE';
 $('#heroTitle').innerHTML=(b.heroTitle||'FORM.\\nWEIGHT.\\nPRESENCE.').replaceAll('\\n','<br>');
 $('#heroText').textContent=b.heroText||'';
 $('#catalogTitle').textContent=s.catalogTitle||'SHOP THE DROP';
 $('#productCount').textContent=products.length;
 $('#announcement').textContent=b.announcement||'';
 $('#announcement').classList.toggle('show',!!(s.showAnnouncement&&b.announcement));
 $('#cursorGlow').style.display=s.showCursorGlow===false?'none':'block';
 const co=s.checkout||{};
 if($('#whatsappCheckoutBtn')) $('#whatsappCheckoutBtn').textContent=co.buttonLabel||'FINALIZAR PELO WHATSAPP';
 if($('#checkoutNotice')) $('#checkoutNotice').textContent=co.manualNotice||'Pagamento e entrega são combinados diretamente com a LZ.';
 const ig=co.instagram||b.instagram||'lzstore.pt';
 if($('#instagramCheckout')){$('#instagramCheckout').href=`https://www.instagram.com/${ig.replace('@','')}/`;$('#instagramCheckout').textContent=`Prefere Instagram? Falar com @${ig.replace('@','')} ↗`;}
 if($('#footerInstagram')) $('#footerInstagram').href=`https://www.instagram.com/${ig.replace('@','')}/`;
}
function renderHero(){
 const f=products.filter(p=>p.featured).slice(0,3), use=f.length>=3?f:products.slice(0,3);
 $('#heroStage').innerHTML=use.map((p,i)=>`<article class="floating-card ${i===0?'big rotate-a':i===1?'small rotate-b':'strip rotate-c'}"><img src="${p.image}" alt="${p.name}"></article>`).join('')+'<div class="hero-ring"></div>';
}
function matches(p,f){return f==='todos'||p.type===f||p.gender===f}
function renderProducts(filter='todos'){
 const list=products.filter(p=>matches(p,filter));
 $('#productGrid').innerHTML=list.map((p,i)=>`<article class="product-card reveal" data-id="${p.id}"><span class="product-index">${String(i+1).padStart(2,'0')}</span><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="product-meta"><div><h3>${p.name}</h3><p>${p.type} / ${p.gender} / ${p.color}</p></div><div class="product-price">${money(p.price)}</div></div></article>`).join('');
 $$('.product-card').forEach(c=>c.onclick=()=>openProduct(c.dataset.id));attachReveal();
}
function wire(){
 $$('.filter').forEach(b=>b.onclick=()=>{$$('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProducts(b.dataset.filter)});
 $$('[data-scroll]').forEach(b=>b.onclick=()=>$(b.dataset.scroll).scrollIntoView({behavior:'smooth'}));
 $$('[data-filter-jump]').forEach(b=>b.onclick=()=>{$('#catalogo').scrollIntoView({behavior:'smooth'});setTimeout(()=>document.querySelector(`.filter[data-filter="${b.dataset.filterJump}"]`).click(),350)});
 $('#cartBtn').onclick=openCart;$('#closeCart').onclick=closeAll;$('#backdrop').onclick=closeAll;$('#modalClose').onclick=closeAll;
 $('#searchBtn').onclick=openSearch;$('#closeSearch').onclick=closeSearch;$('#searchInput').oninput=e=>searchProducts(e.target.value);$('#modalAdd').onclick=addToCart;
 $('#checkoutBtn').onclick=openCheckout;$('#checkoutClose').onclick=closeCheckout;$('#checkoutForm').onsubmit=finalizeWhatsApp;
 window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeAll();closeSearch();closeCheckout()}});
 const g=$('#cursorGlow');window.addEventListener('pointermove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
}
function openProduct(id){
 activeProduct=products.find(p=>p.id===id);chosenSize=null;
 $('#modalImage').src=activeProduct.image;$('#modalName').textContent=activeProduct.name;$('#modalType').textContent=`${activeProduct.type} / ${activeProduct.gender} / ${activeProduct.color}`;$('#modalPrice').textContent=money(activeProduct.price);$('#modalDesc').textContent=activeProduct.description||'';
 $('#sizeGrid').innerHTML=(activeProduct.sizes||[]).map(s=>`<button class="size-btn" data-size="${s}">${s}</button>`).join('');
 $$('.size-btn').forEach(b=>b.onclick=()=>{$$('.size-btn').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');chosenSize=b.dataset.size});
 $('#productModal').classList.add('open');$('#backdrop').classList.add('show');document.body.style.overflow='hidden';
}
function addToCart(){if(!chosenSize){const b=$('#modalAdd');b.textContent='ESCOLHA UM TAMANHO';setTimeout(()=>b.textContent='ADICIONAR AO CARRINHO',1000);return}cart.push({...activeProduct,size:chosenSize,cartId:crypto.randomUUID?crypto.randomUUID():Date.now()});saveCart();closeAll();openCart()}
function saveCart(){localStorage.setItem('lz-cart-v6',JSON.stringify(cart));renderCart()}
function renderCart(){$('#cartCount').textContent=cart.length;$('#cartEmpty').style.display=cart.length?'none':'block';$('#cartItems').innerHTML=cart.map(x=>`<div class="cart-item"><img src="${x.image}"><div><h4>${x.name}</h4><small>${x.size} / ${x.color}</small><p>${money(x.price)}</p></div><button data-remove="${x.cartId}">×</button></div>`).join('');$('#cartTotal').textContent=money(cart.reduce((a,b)=>a+b.price,0));$('#checkoutBtn').disabled=!cart.length;$$('[data-remove]').forEach(b=>b.onclick=()=>{cart=cart.filter(x=>String(x.cartId)!==String(b.dataset.remove));saveCart()})}
function openCart(){renderCart();$('#cartDrawer').classList.add('open');$('#backdrop').classList.add('show');document.body.style.overflow='hidden'}
function closeAll(){$('#productModal').classList.remove('open');$('#cartDrawer').classList.remove('open');$('#backdrop').classList.remove('show');document.body.style.overflow=''}

function groupedCart(){
 const map=new Map();
 cart.forEach(item=>{
  const key=`${item.id}|${item.size}|${item.color}`;
  if(!map.has(key)) map.set(key,{...item,qty:0});
  map.get(key).qty++;
 });
 return [...map.values()];
}
function renderCheckout(){
 const items=groupedCart();
 $('#checkoutItems').innerHTML=items.map(x=>`<div class="checkout-line"><img src="${x.image}" alt=""><div><h4>${x.qty}× ${x.name}</h4><p>Tamanho ${x.size} · ${x.color}</p></div><strong>${money(x.price*x.qty)}</strong></div>`).join('');
 $('#checkoutTotal').textContent=money(cart.reduce((a,b)=>a+b.price,0));
}
function openCheckout(){
 if(!cart.length)return;
 closeAll();renderCheckout();
 $('#checkoutModal').classList.add('open');$('#checkoutModal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
 setTimeout(()=>$('#customerName').focus(),120);
}
function closeCheckout(){
 if(!$('#checkoutModal'))return;
 $('#checkoutModal').classList.remove('open');$('#checkoutModal').setAttribute('aria-hidden','true');
 if(!$('#productModal').classList.contains('open')&&!$('#cartDrawer').classList.contains('open')&&!$('#searchOverlay').classList.contains('open'))document.body.style.overflow='';
}
function cleanHandle(v=''){return String(v).trim().replace(/^@/,'')}
function makeOrderId(){const d=new Date(),pad=n=>String(n).padStart(2,'0');return `LZ-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${String(Date.now()).slice(-5)}`}
function finalizeWhatsApp(e){
 e.preventDefault();if(!cart.length)return;
 const checkout=cfg.settings?.checkout||{};
 const number=String(checkout.whatsappNumber||'351928034683').replace(/\D/g,'');
 const name=$('#customerName').value.trim(),city=$('#customerCity').value.trim(),ig=cleanHandle($('#customerInstagram').value),notes=$('#customerNotes').value.trim();
 if(!name||!city)return;
 const id=makeOrderId(), items=groupedCart(), total=cart.reduce((a,b)=>a+b.price,0);
 let msg=`🖤 *LZ STORE — NOVO PEDIDO*\n*Pedido:* ${id}\n\n`;
 msg+=`*Cliente:* ${name}\n*Cidade:* ${city}\n`;
 if(ig)msg+=`*Instagram:* @${ig}\n`;
 msg+='\n*ITENS*\n';
 items.forEach((x,i)=>{msg+=`${i+1}. *${x.qty}x ${x.name}*\nTamanho: ${x.size}\nCor: ${x.color}\nSubtotal: ${money(x.price*x.qty)}\n\n`});
 msg+=`*TOTAL: ${money(total)}*\n`;
 if(notes)msg+=`\n*Observações:* ${notes}\n`;
 msg+='\nQuero finalizar esse pedido. Podem confirmar estoque, pagamento e envio?';
 const url=`https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
 window.open(url,'_blank','noopener,noreferrer');
}

function openSearch(){$('#searchOverlay').classList.add('open');searchProducts('');setTimeout(()=>$('#searchInput').focus(),100)}
function closeSearch(){$('#searchOverlay').classList.remove('open');$('#searchInput').value=''}
function searchProducts(q=''){const list=products.filter(p=>`${p.name} ${p.type} ${p.gender} ${p.color}`.toLowerCase().includes(q.toLowerCase()));$('#searchResults').innerHTML=list.map(p=>`<div class="search-item" data-search-id="${p.id}"><img src="${p.image}"><h4>${p.name}</h4><span>${money(p.price)}</span></div>`).join('');$$('[data-search-id]').forEach(e=>e.onclick=()=>{closeSearch();openProduct(e.dataset.searchId)})}
function attachReveal(){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}}),{threshold:.1});$$('.reveal:not(.visible)').forEach(e=>o.observe(e))}
init().catch(console.error);
