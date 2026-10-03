
const ADMIN_PASSWORD = '787878';
const STORAGE_KEY = 'lz-admin-config-v1';
const SESSION_KEY = 'lz-admin-auth';
const defaults = JSON.parse(JSON.stringify(window.LZ_STORE));
let state = loadState();
let editIndex = -1;
const $ = s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

function loadState(){ try{ const raw=localStorage.getItem(STORAGE_KEY); return raw?JSON.parse(raw):JSON.parse(JSON.stringify(window.LZ_STORE)); }catch(e){ return JSON.parse(JSON.stringify(window.LZ_STORE)); }}
function saveState(){ localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); $('#saveStatus').textContent='Salvo agora'; setTimeout(()=>$('#saveStatus').textContent='Alterações salvas neste navegador',1300); renderAll(); }
function money(n){ return new Intl.NumberFormat('pt-PT',{style:'currency',currency:'EUR'}).format(Number(n)||0); }

function unlock(){ $('#loginScreen').hidden=true; $('#adminApp').hidden=false; renderAll(); }
if(sessionStorage.getItem(SESSION_KEY)==='1') unlock();
$('#loginForm').addEventListener('submit',e=>{e.preventDefault();if($('#password').value===ADMIN_PASSWORD){sessionStorage.setItem(SESSION_KEY,'1');unlock();}else{$('#loginError').textContent='Senha incorreta.';$('#password').value='';}});
$('#logoutBtn').onclick=()=>{sessionStorage.removeItem(SESSION_KEY);location.reload();};
$('#previewBtn').onclick=()=>window.open('../','_blank');

const titles={dashboard:'Visão geral',products:'Produtos',appearance:'Site',tools:'Backup & Exportar'};
function goTab(tab){$$('.nav-tab').forEach(x=>x.classList.toggle('active',x.dataset.tab===tab));$$('.tab-panel').forEach(x=>x.classList.toggle('active',x.dataset.panel===tab));$('#pageTitle').textContent=titles[tab]||'Admin';}
$$('.nav-tab').forEach(b=>b.onclick=()=>goTab(b.dataset.tab));$$('[data-go]').forEach(b=>b.onclick=()=>goTab(b.dataset.go));

function renderAll(){renderStats();renderProducts();fillAppearance();}
function renderStats(){const p=state.products||[];const visible=p.filter(x=>x.visible!==false);$('#stats').innerHTML=[['Produtos',p.length],['Visíveis',visible.length],['Camisetas',p.filter(x=>x.type==='camiseta').length],['Moletons',p.filter(x=>x.type==='moletom').length]].map(([a,b])=>`<div class="stat"><strong>${b}</strong><span>${a}</span></div>`).join('');}
function renderProducts(){const p=state.products||[];$('#productAdminList').innerHTML=p.map((x,i)=>`<div class="product-row"><img src=".${x.image.replace(/^\./,'')}" onerror="this.src='../assets/brand/lz-logo.png'"><div><h4>${x.name}</h4><p>${x.type} · ${x.gender} · ${money(x.price)} · ${x.color}</p></div><span class="badge">${x.visible===false?'OCULTO':'VISÍVEL'}</span><button data-edit="${i}">Editar</button></div>`).join('');$$('[data-edit]').forEach(b=>b.onclick=()=>openProductEditor(Number(b.dataset.edit)));}

function fillAppearance(){const b=state.brand||{};$('#brandName').value=b.name||'LZ';$('#storeName').value=b.storeName||'LZ STORE';$('#announcement').value=b.announcement||'';$('#heroEyebrowInput').value=b.heroEyebrow||'LZ STORE / DROP 01';$('#heroTitleInput').value=b.heroTitle||'FORM.<br>WEIGHT.<br>PRESENCE.';$('#heroTextInput').value=b.heroText||'Camisetas e moletons com direção monocromática, tipografia forte e identidade própria. Sem excesso — só peça bonita.';}
$('#saveAppearance').onclick=()=>{state.brand={...(state.brand||{}),name:$('#brandName').value.trim()||'LZ',storeName:$('#storeName').value.trim()||'LZ STORE',announcement:$('#announcement').value.trim(),heroEyebrow:$('#heroEyebrowInput').value.trim(),heroTitle:$('#heroTitleInput').value.trim(),heroText:$('#heroTextInput').value.trim()};saveState();};

function openProductEditor(i=-1){editIndex=i;const isNew=i<0;const p=isNew?{id:'',name:'',type:'camiseta',gender:'masculino',price:34.99,color:'',image:'./assets/products/',description:'',sizes:['S','M','L','XL'],visible:true}:state.products[i];$('#productModalTitle').textContent=isNew?'Novo produto':'Editar produto';$('#pIndex').value=i;$('#pName').value=p.name||'';$('#pId').value=p.id||'';$('#pType').value=p.type||'camiseta';$('#pGender').value=p.gender||'masculino';$('#pPrice').value=p.price??0;$('#pColor').value=p.color||'';$('#pImage').value=p.image||'';$('#pDescription').value=p.description||'';$('#pSizes').value=(p.sizes||[]).join(', ');$('#pVisible').checked=p.visible!==false;$('#deleteProduct').style.visibility=isNew?'hidden':'visible';$('#productModal').hidden=false;}
$('#addProduct').onclick=()=>openProductEditor(-1);$('#closeProductModal').onclick=()=>$('#productModal').hidden=true;
$('#productForm').addEventListener('submit',e=>{e.preventDefault();const p={id:$('#pId').value.trim(),name:$('#pName').value.trim(),type:$('#pType').value,gender:$('#pGender').value,price:Number($('#pPrice').value),color:$('#pColor').value.trim(),image:$('#pImage').value.trim(),description:$('#pDescription').value.trim(),sizes:$('#pSizes').value.split(',').map(x=>x.trim()).filter(Boolean),visible:$('#pVisible').checked};if(!p.id||!p.name)return;if(editIndex<0)state.products.push(p);else state.products[editIndex]=p;saveState();$('#productModal').hidden=true;});
$('#deleteProduct').onclick=()=>{if(editIndex<0)return;if(confirm('Excluir este produto?')){state.products.splice(editIndex,1);saveState();$('#productModal').hidden=true;}};

$('#resetDraft').onclick=()=>{if(confirm('Restaurar toda a configuração padrão?')){localStorage.removeItem(STORAGE_KEY);state=JSON.parse(JSON.stringify(defaults));saveState();}};
function download(name,content,type='text/plain'){const blob=new Blob([content],{type});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);}
$('#exportBackup').onclick=()=>download('lz-store-backup.json',JSON.stringify(state,null,2),'application/json');
$('#importBackup').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const parsed=JSON.parse(await f.text());if(!parsed.products)throw new Error();state=parsed;saveState();alert('Backup importado.');}catch(err){alert('Arquivo de backup inválido.');}e.target.value='';};
$('#exportConfig').onclick=()=>{const content='window.LZ_STORE = '+JSON.stringify(state,null,2)+';\n';download('config.js',content,'text/javascript');};
