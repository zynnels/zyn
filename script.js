```js
const cfg = window.LZ_CONFIG;

let cart = JSON.parse(localStorage.getItem('lz-cart') || '[]');
let activeProduct = null;
let chosenSize = null;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

$('#announcement').textContent = cfg.brand.announcement;
$('#footerTagline').textContent = cfg.brand.tagline;
$('#igLink').href = cfg.brand.instagram;
$('#ttLink').href = cfg.brand.tiktok;

const money = n =>
  new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR'
  }).format(n);

function renderProducts(filter = 'todos') {
  const list =
    filter === 'todos'
      ? cfg.products
      : cfg.products.filter(p => p.category === filter);

  $('#productGrid').innerHTML = list
    .map(
      p => `
        <article class="product-card" data-id="${p.id}">
          <span class="product-badge">${p.badge}</span>

          <div class="product-image">
            <img
              src="${p.image}"
              alt="${p.name}"
              loading="lazy"
            >
          </div>

          <div class="product-meta">
            <div>
              <h3>${p.name}</h3>
              <p>${p.color}</p>
            </div>

            <div class="product-price">
              ${money(p.price)}
            </div>
          </div>
        </article>
      `
    )
    .join('');

  $$('.product-card').forEach(card => {
    card.onclick = () => openProduct(card.dataset.id);
  });
}

renderProducts();

$$('.filter').forEach(button => {
  button.onclick = () => {
    $$('.filter').forEach(x => x.classList.remove('active'));

    button.classList.add('active');

    renderProducts(button.dataset.filter);
  };
});

$$('[data-scroll-filter]').forEach(button => {
  button.onclick = () => {
    const filter = button.dataset.scrollFilter;

    $('#catalogo').scrollIntoView();

    setTimeout(() => {
      $(`.filter[data-filter="${filter}"]`).click();
    }, 350);
  };
});

function openProduct(id) {
  activeProduct = cfg.products.find(p => p.id === id);
  chosenSize = null;

  $('#modalImage').src = activeProduct.image;
  $('#modalName').textContent = activeProduct.name;
  $('#modalBadge').textContent = activeProduct.badge;
  $('#modalColor').textContent = activeProduct.color;
  $('#modalPrice').textContent = money(activeProduct.price);
  $('#modalDesc').textContent = activeProduct.description;

  $('#sizeGrid').innerHTML = activeProduct.sizes
    .map(
      size => `
        <button
          class="size-btn"
          data-size="${size}"
        >
          ${size}
        </button>
      `
    )
    .join('');

  $$('.size-btn').forEach(button => {
    button.onclick = () => {
      $$('.size-btn').forEach(x => x.classList.remove('selected'));

      button.classList.add('selected');

      chosenSize = button.dataset.size;
    };
  });

  $('#productModal').classList.add('open');
  $('#productModal').setAttribute('aria-hidden', 'false');

  $('#backdrop').classList.add('show');

  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#productModal').classList.remove('open');

  $('#backdrop').classList.remove('show');

  document.body.style.overflow = '';
}

$('#modalClose').onclick = closeModal;

$('#modalAdd').onclick = () => {
  if (!chosenSize) {
    $('#modalAdd').textContent = 'ESCOLHA UM TAMANHO ↑';

    setTimeout(() => {
      $('#modalAdd').textContent = 'ADICIONAR AO CARRINHO';
    }, 1300);

    return;
  }

  cart.push({
    ...activeProduct,
    size: chosenSize,
    cartId: Date.now()
  });

  saveCart();

  closeModal();

  openCart();
};

function saveCart() {
  localStorage.setItem('lz-cart', JSON.stringify(cart));

  renderCart();
}

function renderCart() {
  $('#cartCount').textContent = cart.length;

  $('#cartEmpty').style.display =
    cart.length
      ? 'none'
      : 'block';

  $('#cartItems').innerHTML = cart
    .map(
      item => `
        <div class="cart-item">

          <img src="${item.image}">

          <div>
            <h4>${item.name}</h4>

            <small>
              ${item.size} · ${item.color}
            </small>

            <p>
              ${money(item.price)}
            </p>
          </div>

          <button data-remove="${item.cartId}">
            ×
          </button>

        </div>
      `
    )
    .join('');

  $('#cartTotal').textContent = money(
    cart.reduce((total, item) => total + item.price, 0)
  );

  $$('[data-remove]').forEach(button => {
    button.onclick = () => {
      cart = cart.filter(
        item => item.cartId != button.dataset.remove
      );

      saveCart();
    };
  });
}

renderCart();

function openCart() {
  $('#cartDrawer').classList.add('open');

  $('#backdrop').classList.add('show');

  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('#cartDrawer').classList.remove('open');

  $('#backdrop').classList.remove('show');

  document.body.style.overflow = '';
}

$('#cartBtn').onclick = openCart;

$('#closeCart').onclick = closeCart;

$('#backdrop').onclick = () => {
  closeCart();

  closeModal();
};

$('#newsletterForm').onsubmit = event => {
  event.preventDefault();

  $('#newsletterNote').textContent =
    'Você entrou no Inner Circle. Agora ficou perigoso 😮‍💨';

  event.target.reset();
};

function openSearch() {
  $('#searchOverlay').classList.add('open');

  setTimeout(() => {
    $('#searchInput').focus();
  }, 200);

  searchProducts('');
}

function closeSearch() {
  $('#searchOverlay').classList.remove('open');

  $('#searchInput').value = '';
}

$('#searchBtn').onclick = openSearch;

$('#closeSearch').onclick = closeSearch;

$('#searchInput').oninput = event => {
  searchProducts(event.target.value);
};

function searchProducts(query) {
  const list = cfg.products.filter(product =>
    (product.name + ' ' + product.color)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  $('#searchResults').innerHTML = list
    .map(
      product => `
        <div
          class="search-item"
          data-search-id="${product.id}"
        >

          <img src="${product.image}">

          <p>
            ${product.name} — ${money(product.price)}
          </p>

        </div>
      `
    )
    .join('');

  $$('[data-search-id]').forEach(item => {
    item.onclick = () => {
      closeSearch();

      openProduct(item.dataset.searchId);
    };
  });
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.12
  }
);

$$('.reveal').forEach(element => {
  observer.observe(element);
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeCart();
    closeModal();
    closeSearch();
  }
});
```
