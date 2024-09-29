const test = document.getElementById("test");

async function tery() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();

    // Clear any existing content in the test element
    test.innerHTML = ""; // Start with an empty container

    // Loop through each product in the JSON array
    json.forEach((product) => {
      // Create card HTML for each product
      const card = `
        <div class="col-md-4 col-lg-3 col-xl-2 mt-3">
          <div class="card carddata" onclick="openProductPage(${product.id})">
            <div class="picture-wrapper common-img fs-card-img img-w100p d-flex justify-content-center">
              <img src="${
                product.image
              }" loading="lazy" class="card-img-top" alt="${product.title}">
            </div>
            <div class="card-body">
<div class="fs-card-price">
                <span class="currency">₱</span>
                <span class="price">${product.price.toFixed(2)}</span>
              </div>
              <h6 class="card-title fs-card-title two-line-clamp">${
                product.title
              }</h6>
              
            </div>
          </div>

        </div>
      `;
      // Append the card to the test element
      test.innerHTML += card; // Concatenate the card HTML
    });
  } catch (error) {
    console.error("Error fetching data:", error); // Log any errors
  }
}

// Function to open a new page with product information
function openProductPage(productId) {
  window.location.href = `product.html?id=${productId}`; // Redirect to product page with the product ID
}

tery(); // Call the function to execute it
//this is new
