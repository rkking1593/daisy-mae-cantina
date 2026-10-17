/**
 * Daisy Mae Cantina - Interactive Digital Menu & WhatsApp Direct Order
 * Khan Market, New Delhi
 */

// Configuration (Placeholder WhatsApp as requested)
const CONFIG = {
  cafeName: 'Daisy Mae Cantina',
  whatsappNumber: '919889225517', // 91 + 9889225517
  location: 'Shop No. 7, 2nd Floor, Khan Market, New Delhi',
  instagram: 'https://instagram.com/daisymaecantina',
  phoneCall: '+919889225517',
  currency: '₹'
};

// Curated Signature Menu Data (with authentic Mexican / Cantina items & realistic Khan Market cafe pricing)
const MENU_DATA = [
  {
    id: 'tacos',
    categoryName: 'Signature Tacos & Birria',
    items: [
      {
        id: 'baja-crispy-tacos',
        name: 'Baja Crispy Street Tacos (2 pcs)',
        price: 490,
        isVeg: false,
        desc: 'Tempura-crisp tiger prawns or adobo fish, chunky house guacamole, shredded slaw & salsa verde on warm corn tortillas.',
        bestseller: true,
        spicy: false,
        img: 'images/daisy_drinks_6.webp'
      },
      {
        id: 'birria-tacos',
        name: 'Slow-Cooked Birria Street Tacos',
        price: 490,
        isVeg: false,
        desc: 'Tender braised pulled meat, melted Oaxaca cheese, cilantro & onion in crispy grilled corn tortillas with rich dipping consommé.',
        bestseller: true,
        spicy: true,
        img: null
      },
      {
        id: 'baja-avocado-taco',
        name: 'Crispy Baja Avocado Tacos (3 pcs)',
        price: 420,
        isVeg: true,
        desc: 'Crispy panko avocado spears, pickled purple cabbage slaw, chipotle crema & charred salsa verde.',
        bestseller: false,
        spicy: false,
        img: null
      },
      {
        id: 'chipotle-chicken-taco',
        name: 'Smoked Chipotle Chicken Tacos',
        price: 460,
        isVeg: false,
        desc: 'Adobo grilled chicken breast, charred pineapple relish, queso fresco and fresh coriander sprigs.',
        bestseller: true,
        spicy: true,
        img: null
      }
    ]
  },
  {
    id: 'nachos',
    categoryName: 'Nachos & Small Plates',
    items: [
      {
        id: 'fiesta-loaded-nachos',
        name: 'Cantina Fiesta Loaded Nachos Platter',
        price: 480,
        isVeg: false,
        desc: 'Stoneground corn nachos loaded with adobo grilled chicken, melted Oaxaca cheese, refried black beans, sour cream, guacamole & fresh pico de gallo.',
        bestseller: true,
        spicy: true,
        img: 'images/daisy_interior_2.webp'
      },
      {
        id: 'street-elote',
        name: 'Charred Mexican Street Corn Ribs (Elote)',
        price: 360,
        isVeg: true,
        desc: 'Spiral charred sweet corn ribs brushed with cilantro lime butter, cotija cheese crumbles, fresh herbs & house ancho chile dust.',
        bestseller: true,
        spicy: true,
        img: 'images/daisy_bar_3.webp'
      },
      {
        id: 'cantina-fried-torta',
        name: 'Crispy Fried Chicken Mexican Torta',
        price: 460,
        isVeg: false,
        desc: 'Buttermilk fried crispy chicken thigh, avocado mash, chipotle mayo, pickled jalapeños on grilled brioche with spiced fries.',
        bestseller: false,
        spicy: true,
        img: 'images/daisy_tacos_4.webp'
      },
      {
        id: 'tableside-guac',
        name: 'Tableside Fresh Guacamole & Chips',
        price: 390,
        isVeg: true,
        desc: 'Hand-mashed Hass avocados, roasted serrano chilies, Roma tomatoes, sea salt, lime & house warm corn chips.',
        bestseller: true,
        spicy: false,
        img: null
      }
    ]
  },
  {
    id: 'quesadillas',
    categoryName: 'Quesadillas & Platters',
    items: [
      {
        id: 'chimichurri-skewer-platter',
        name: 'Daisy Mae Chimichurri Skewer Platter',
        price: 540,
        isVeg: false,
        desc: 'Fire-grilled skewered prawns & scallions drizzled with herb chimichurri, served over Mexican red rice, refried beans, charred corn & house salsa.',
        bestseller: true,
        spicy: false,
        img: 'images/daisy_food_7.webp'
      },
      {
        id: 'four-cheese-quesadilla',
        name: 'Oaxaca Three-Cheese Quesadilla & Spanish Rice',
        price: 460,
        isVeg: true,
        desc: 'Golden grilled flour tortilla stuffed with melted Oaxaca cheese, served with fragrant Spanish rice, guacamole, sour cream & salsa verde.',
        bestseller: true,
        spicy: false,
        img: 'images/daisy_nachos_5.webp'
      },
      {
        id: 'tinga-quesadilla',
        name: 'Chicken Tinga & Roasted Corn Quesadilla',
        price: 490,
        isVeg: false,
        desc: 'Slow-simmered smoky tomato chicken, roasted corn, scallions and double cheese blend with avocado dip.',
        bestseller: false,
        spicy: false,
        img: null
      }
    ]
  },
  {
    id: 'desserts',
    categoryName: 'Sweet Cantina',
    items: [
      {
        id: 'churro-icecream-taco',
        name: 'Signature Churro Ice Cream Taco',
        price: 360,
        isVeg: true,
        desc: 'Crispy cinnamon-sugar dusted taco waffle shell filled with vanilla bean gelato, chocolate drizzle & toasted pistachios.',
        bestseller: true,
        spicy: false,
        img: null
      },
      {
        id: 'classic-churros',
        name: 'Artisanal Churros with Warm Dulce de Leche',
        price: 310,
        isVeg: true,
        desc: 'Golden crisp fluted Mexican dough sticks rolled in aromatic cinnamon sugar, served with Belgian chocolate & caramel dip.',
        bestseller: true,
        spicy: false,
        img: null
      },
      {
        id: 'tres-leches',
        name: 'Classic Vanilla Tres Leches Cake',
        price: 340,
        isVeg: true,
        desc: 'Traditional sponge cake soaked in three decadent milks, topped with vanilla cloud cream & fresh berries.',
        bestseller: false,
        spicy: false,
        img: null
      }
    ]
  },
  {
    id: 'beverages',
    categoryName: 'Cantina Coolers & Sips',
    items: [
      {
        id: 'kiwi-basil-cooler',
        name: 'Artisanal Kiwi Basil Agave Cooler',
        price: 290,
        isVeg: true,
        desc: 'Muddled golden kiwi slices, sweet basil leaves, fresh Mexican lime juice, organic blue agave nectar and soda over crushed ice.',
        bestseller: true,
        spicy: false,
        img: 'images/daisy_interior_1.webp'
      },
      {
        id: 'hibiscus-agua-fresca',
        name: 'Ruby Hibiscus Agua Fresca (Jamaica)',
        price: 240,
        isVeg: true,
        desc: 'Mexican iced hibiscus tea infused with fresh orange zest, cinnamon and organic cane syrup. Refreshingly tart.',
        bestseller: false,
        spicy: false,
        img: null
      },
      {
        id: 'cold-brew-horchata',
        name: 'Mexican Spiced Cold Brew Horchata',
        price: 280,
        isVeg: true,
        desc: 'House-made rice and almond milk with Ceylon cinnamon, blended over 18-hour cold brew coffee on the rocks.',
        bestseller: true,
        spicy: false,
        img: null
      }
    ]
  }
];

// App State
let cart = {}; // { itemId: { item, qty } }
let activeCategory = MENU_DATA[0].id;
let activeDiet = 'all'; // 'all', 'veg', 'nonveg'
let searchQuery = '';
let orderType = 'delivery'; // 'delivery', 'pickup', 'dinein'
let isUserClickingTab = false;
let spyObserver = null;

// DOM Elements
const menuContainer = document.getElementById('menu-container');
const categoryTabs = document.getElementById('category-tabs');
const searchInput = document.getElementById('search-input');
const dietPills = document.querySelectorAll('.diet-pill');
const cartFloatingBar = document.getElementById('cart-floating-bar');
const cartBarCount = document.getElementById('cart-bar-count');
const cartBarTotal = document.getElementById('cart-bar-total');

// Drawer Elements
const drawerBackdrop = document.getElementById('drawer-backdrop');
const drawerPanel = document.getElementById('drawer-panel');
const drawerCloseBtn = document.getElementById('drawer-close-btn');
const drawerItemsList = document.getElementById('drawer-items-list');
const drawerSubtotal = document.getElementById('drawer-subtotal');
const drawerTotal = document.getElementById('drawer-total');
const typeTabs = document.querySelectorAll('.type-tab');
const deliveryFields = document.getElementById('delivery-fields');
const dineinFields = document.getElementById('dinein-fields');
const btnWhatsappOrder = document.getElementById('btn-whatsapp-order');
const toastEl = document.getElementById('toast-msg');

// Helpers
const formatINR = (amt) => `${CONFIG.currency}${amt.toLocaleString('en-IN')}`;

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 2200);
}

// Render Category Navigation Tabs (Real food categories only, Swiggy/Zomato style)
function renderCategoryTabs() {
  const categories = MENU_DATA.map(c => ({ id: c.id, name: c.categoryName }));
  categoryTabs.innerHTML = categories.map(cat => `
    <button class="cat-btn ${activeCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  categoryTabs.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const catId = btn.dataset.cat;
      isUserClickingTab = true;
      setActiveCategoryTab(catId);

      const targetSection = document.getElementById(`section-${catId}`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      setTimeout(() => {
        isUserClickingTab = false;
      }, 800);
    });
  });
}

function setActiveCategoryTab(catId) {
  activeCategory = catId;
  const buttons = categoryTabs.querySelectorAll('.cat-btn');
  buttons.forEach(btn => {
    const isCurrent = btn.dataset.cat === catId;
    btn.classList.toggle('active', isCurrent);
    if (isCurrent) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  });
}

// Generate Dish Card HTML
function dishCardHtml(item) {
  const currentQty = cart[item.id] ? cart[item.id].qty : 0;
  const hasImg = !!item.img;
  
  return `
    <div class="dish-card ${hasImg ? '' : 'no-img'}" id="card-${item.id}">
      <div class="dish-info">
        <div class="dish-badges">
          <span class="food-type-icon ${item.isVeg ? 'veg' : 'nonveg'}">
            ${item.isVeg ? '<span class="circle"></span>' : '<span class="triangle"></span>'}
          </span>
          ${item.bestseller ? '<span class="bestseller-badge">★ Bestseller</span>' : ''}
          ${item.spicy ? '<span class="spicy-badge">🌶️ Spicy</span>' : ''}
        </div>
        <h3 class="dish-name">${item.name}</h3>
        <div class="dish-price">${formatINR(item.price)}</div>
        <p class="dish-desc">${item.desc}</p>
      </div>

      <div class="dish-action-col ${hasImg ? '' : 'no-img'}">
        ${hasImg ? `
        <div class="dish-img-box">
          <img src="${item.img}" alt="${item.name}" class="dish-img" width="110" height="95" loading="lazy" decoding="async" onerror="this.onerror=null;this.parentElement.style.display='none';this.closest('.dish-action-col').classList.add('no-img');"/>
        </div>
        ` : ''}
        <div class="btn-add-container" id="control-${item.id}">
          ${controlHtml(item.id, currentQty)}
        </div>
      </div>
    </div>
  `;
}

function controlHtml(itemId, qty) {
  if (qty > 0) {
    return `
      <div class="stepper">
        <button class="stepper-btn" onclick="updateItemQty('${itemId}', -1)" aria-label="Decrease quantity">−</button>
        <span class="stepper-qty">${qty}</span>
        <button class="stepper-btn" onclick="updateItemQty('${itemId}', 1)" aria-label="Increase quantity">+</button>
      </div>
    `;
  }
  return `
    <button class="btn-add" onclick="updateItemQty('${itemId}', 1)">
      <span>+ Add</span>
    </button>
  `;
}

// Render Menu with All Categories (Swiggy/Zomato style continuous scroll)
function renderMenu() {
  let html = '';
  let matchCount = 0;

  MENU_DATA.forEach(group => {
    // Filter items based on Diet & Search
    const filteredItems = group.items.filter(item => {
      // Diet check
      if (activeDiet === 'veg' && !item.isVeg) return false;
      if (activeDiet === 'nonveg' && item.isVeg) return false;
      // Search check
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.desc.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc) return false;
      }
      return true;
    });

    if (filteredItems.length > 0) {
      matchCount += filteredItems.length;
      html += `
        <section class="category-group" id="section-${group.id}">
          <div class="category-header">
            <h2 class="category-heading">${group.categoryName}</h2>
            <span class="category-count">${filteredItems.length} items</span>
          </div>
          <div class="category-dishes">
            ${filteredItems.map(item => dishCardHtml(item)).join('')}
          </div>
        </section>
      `;
    }
  });

  if (matchCount === 0) {
    html = `
      <div class="empty-menu">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <p><strong>No dishes found</strong></p>
        <p style="font-size: 13px; margin-top: 4px;">Try searching for something else or reset filters.</p>
      </div>
    `;
  }

  menuContainer.innerHTML = html;
  setupScrollSpy();
}

// Swiggy/Zomato ScrollSpy: Automatically highlights and auto-centers the active tab as user scrolls
function setupScrollSpy() {
  if (spyObserver) {
    spyObserver.disconnect();
  }

  const sections = document.querySelectorAll('.category-group');
  if (sections.length === 0) return;

  const stickyBar = document.querySelector('.sticky-filter-wrapper');
  const offset = stickyBar ? stickyBar.offsetHeight + 20 : 160;

  spyObserver = new IntersectionObserver((entries) => {
    if (isUserClickingTab) return;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const catId = entry.target.id.replace('section-', '');
        setActiveCategoryTab(catId);
      }
    });
  }, {
    rootMargin: `-${offset}px 0px -55% 0px`,
    threshold: 0
  });

  sections.forEach(sec => spyObserver.observe(sec));
}

// Find item in all groups
function findItem(itemId) {
  for (const group of MENU_DATA) {
    const found = group.items.find(i => i.id === itemId);
    if (found) return found;
  }
  return null;
}

// Update Item Quantity in Cart
window.updateItemQty = function(itemId, delta) {
  const item = findItem(itemId);
  if (!item) return;

  const current = cart[itemId] ? cart[itemId].qty : 0;
  const newQty = current + delta;

  if (newQty > 0) {
    cart[itemId] = { item, qty: newQty };
    if (current === 0) showToast(`Added ${item.name} to order`);
  } else {
    delete cart[itemId];
  }

  // Update card controls without full menu re-render for smooth experience
  const controlBox = document.getElementById(`control-${itemId}`);
  if (controlBox) {
    controlBox.innerHTML = controlHtml(itemId, newQty > 0 ? newQty : 0);
  }

  updateCartState();
  if (drawerPanel.classList.contains('open')) {
    renderDrawerItems();
  }
};

// Update Bottom Floating Bar & Drawer Counts
function updateCartState() {
  const items = Object.values(cart);
  const totalItems = items.reduce((sum, entry) => sum + entry.qty, 0);
  const subtotal = items.reduce((sum, entry) => sum + (entry.qty * entry.item.price), 0);

  if (totalItems > 0) {
    cartBarCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'} in order`;
    cartBarTotal.textContent = formatINR(subtotal);
    cartFloatingBar.classList.add('visible');
  } else {
    cartFloatingBar.classList.remove('visible');
    closeDrawer();
  }

  drawerSubtotal.textContent = formatINR(subtotal);
  drawerTotal.textContent = formatINR(subtotal);
}

// Drawer Cart Items List Render
function renderDrawerItems() {
  const items = Object.values(cart);
  if (items.length === 0) {
    drawerItemsList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px 0;">Your order is empty</p>`;
    return;
  }

  drawerItemsList.innerHTML = items.map(({ item, qty }) => `
    <div class="drawer-item-row">
      <div class="drawer-item-left">
        <span class="food-type-icon ${item.isVeg ? 'veg' : 'nonveg'}">
          ${item.isVeg ? '<span class="circle"></span>' : '<span class="triangle"></span>'}
        </span>
        <div class="drawer-item-info">
          <span class="drawer-item-name">${item.name}</span>
          <span class="drawer-item-rate">${formatINR(item.price)} each</span>
        </div>
      </div>
      <div class="drawer-item-right">
        <div class="drawer-stepper">
          <button onclick="updateItemQty('${item.id}', -1)" aria-label="Decrease quantity">−</button>
          <span>${qty}</span>
          <button onclick="updateItemQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
        </div>
        <span class="drawer-item-total">${formatINR(item.price * qty)}</span>
      </div>
    </div>
  `).join('');
}

// Open / Close Drawer
function openDrawer() {
  renderDrawerItems();
  drawerBackdrop.classList.add('open');
  drawerPanel.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawerBackdrop.classList.remove('open');
  drawerPanel.classList.remove('open');
  document.body.style.overflow = '';
}

// Order Type Selection
typeTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    typeTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    orderType = tab.dataset.type;

    if (orderType === 'delivery') {
      deliveryFields.style.display = 'flex';
      dineinFields.style.display = 'none';
    } else if (orderType === 'dinein') {
      deliveryFields.style.display = 'none';
      dineinFields.style.display = 'flex';
    } else { // pickup
      deliveryFields.style.display = 'none';
      dineinFields.style.display = 'none';
    }
  });
});

// Construct WhatsApp Message & Send
function handleWhatsAppCheckout() {
  const items = Object.values(cart);
  if (items.length === 0) {
    alert('Please add items to your cart first.');
    return;
  }

  const custName = document.getElementById('cust-name').value.trim();
  const custPhone = document.getElementById('cust-phone').value.trim();
  const custAddress = document.getElementById('cust-address').value.trim();
  const custTable = document.getElementById('cust-table').value.trim();
  const custNotes = document.getElementById('cust-notes').value.trim();

  // Validate Basic Details
  if (!custName) {
    alert('Please enter your name.');
    document.getElementById('cust-name').focus();
    return;
  }

  if (orderType === 'delivery' && !custAddress) {
    alert('Please enter your delivery address in Delhi NCR.');
    document.getElementById('cust-address').focus();
    return;
  }

  if (orderType === 'dinein' && !custTable) {
    alert('Please enter your Table Number.');
    document.getElementById('cust-table').focus();
    return;
  }

  const subtotal = items.reduce((sum, entry) => sum + (entry.qty * entry.item.price), 0);
  const typeLabel = orderType === 'delivery' ? '🛵 Home Delivery' : (orderType === 'dinein' ? `🍽️ Dine-in (Table ${custTable})` : '🛍️ Self-Pickup / Takeaway');

  // Build formatted WhatsApp message
  let msg = `🛎️ *NEW DIRECT ORDER - DAISY MAE CANTINA*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📍 *Order Type:* ${typeLabel}\n`;
  msg += `👤 *Customer:* ${custName}\n`;
  if (custPhone) msg += `📞 *Phone:* ${custPhone}\n`;
  if (orderType === 'delivery') msg += `🏠 *Delivery Address:* ${custAddress}\n`;
  if (custNotes) msg += `📝 *Notes:* ${custNotes}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `🍽️ *ORDER ITEMS:*\n`;

  items.forEach(({ item, qty }) => {
    const icon = item.isVeg ? '🟢' : '🔴';
    msg += `• ${icon} ${qty}x ${item.name} (${formatINR(item.price * qty)})\n`;
  });

  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 *Total Amount Payable:* ${formatINR(subtotal)}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `_Sent via Daisy Mae Cantina Direct Ordering Portal_`;

  // Encode for WhatsApp URL
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

// Event Listeners
cartFloatingBar.addEventListener('click', openDrawer);
drawerCloseBtn.addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);
btnWhatsappOrder.addEventListener('click', handleWhatsAppCheckout);

// Search Listener
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderMenu();
});

// Diet Pills Listener
dietPills.forEach(pill => {
  pill.addEventListener('click', () => {
    dietPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeDiet = pill.dataset.diet;
    renderMenu();
  });
});

// Dynamic Operating Status based on Indian Standard Time (12:00 PM - 11:30 PM)
function updateCafeStatus() {
  const statusTag = document.getElementById('cafe-status-tag');
  if (!statusTag) return;

  // Calculate current IST (UTC+5:30)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istDate = new Date(utc + (3600000 * 5.5));

  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  const openTime = 12 * 60;       // 12:00 PM = 720 mins
  const closeTime = 23 * 60 + 30; // 11:30 PM = 1410 mins

  if (totalMinutes >= openTime && totalMinutes < closeTime) {
    statusTag.className = 'brand-tag';
    statusTag.innerHTML = `
      <span class="status-dot"></span>
      Open Now · Closes 11:30 PM
    `;
  } else {
    statusTag.className = 'brand-tag closed';
    statusTag.innerHTML = `
      <span class="status-dot closed"></span>
      Closed Now · Opens 12:00 PM
    `;
  }
}

// Dining Ambience Slideshow Logic (6 Real Khan Market Photos)
function initDiningSlideshow() {
  const container = document.getElementById('dining-slideshow');
  if (!container) return;

  const slides = container.querySelectorAll('.slideshow-slide');
  const dots = container.querySelectorAll('.slide-dot');
  const counter = document.getElementById('slideshow-counter');
  const prevBtn = document.getElementById('slide-prev-btn');
  const nextBtn = document.getElementById('slide-next-btn');

  if (!slides.length) return;

  let currentIndex = 0;
  let timer = null;
  const autoPlayDelay = 3800;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    if (counter) {
      counter.textContent = `${currentIndex + 1} / ${slides.length}`;
    }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(nextSlide, autoPlayDelay);
  }

  function stopAutoPlay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // Next / Prev click handlers
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      prevSlide();
      startAutoPlay();
    });
  }

  // Dot click handlers
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      showSlide(idx);
      startAutoPlay();
    });
  });

  // Pause on hover
  container.addEventListener('mouseenter', stopAutoPlay);
  container.addEventListener('mouseleave', () => {
    if (!document.hidden) startAutoPlay();
  });

  // Pause slideshow autoplay when tab is hidden (Lighthouse / Performance)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  // Mobile Touch Swipe Navigation
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', (e) => {
    stopAutoPlay();
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    if (!document.hidden) startAutoPlay();
  }, { passive: true });

  // Start auto play initially if reduced motion is not requested
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    startAutoPlay();
  }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryTabs();
  renderMenu();
  updateCartState();
  updateCafeStatus();
  initDiningSlideshow();
  setInterval(updateCafeStatus, 60000); // Check every minute
});