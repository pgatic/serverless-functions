const result = document.querySelector(".result");

const fetchProduct = async () => {
  result.innerHTML = "<h4>Loading</h4>";
  try {
    const query = window.location.search;
    const {
      data: { fields },
    } = await axios.get(`/api/3-product${query}`);
    const { name, price, desc, image } = fields;
    result.innerHTML = `<h1 class="title">${name}</h1>
    <article class="product">
    <img class="product-img"
    src="${image[0].url}"
    alt="${name}"
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${desc}</p>
    </div>
  </article>`;
  } catch (error) {
    result.innerHTML = `<h4>There was an error: ${error.response.data}</h4>`;
  }
};

fetchProduct();
