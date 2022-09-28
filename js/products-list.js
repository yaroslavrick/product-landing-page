(function () {
  const products = [
    {
      id: 1,
      name: 'React',
      description: `React is a free and open-source front-end JavaScript library
      for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook)
      and a community of individual developers and companies. React can be used as a base in the
      development of single-page, mobile, or server-rendered applications with frameworks like Next.js.
      However, React is only concerned with state management and rendering that state to the DOM, so
      creating React applications usually requires the use of additional libraries for routing, as well as
      certain client-side functionality.`,
      image: 'img/react-icon.svg',
      price: '6000',
    },
    {
      id: 2,
      name: 'Vue',
      description: `Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and
      component composition. The core library is focused on the view layer only. Advanced features
      required for complex applications such as routing, state management and build tooling are offered
      via officially maintained supporting libraries and packages.

      Vue.js allows for extending HTML with HTML attributes called directives. The directives offer
      functionality to HTML applications, and come as either built-in or user defined directives.`,
      image: 'img/vue_js_logo_2.svg',
      price: '7000',
    },
    {
      id: 3,
      name: 'Angular',
      description: `Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.`,
      image: 'img/angular_full_color_logo.svg',
      price: '8000',
    },
  ];

  function renderProducts(products) {
    const productsContainer = document.querySelector(
      '.main-container__section-grid'
    );
    productsContainer.innerHTML = '';
    for (const product of products) {
      productsContainer.innerHTML += `
      <div class="section-grid__grid">
      <div class="grid__icon">
        <img src="${product['image']}" alt="${product['name']} logo" class="logo">
      </div>
      <div class="desc">
        <h2>${product['name']}</h2>
        <p>
          ${product['description']}
        </p>
      </div>
    </div>`;
    }
  }

  renderProducts(products);
})();
