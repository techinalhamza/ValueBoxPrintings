const hamburger = document.querySelector(".hamburger-menu");
const navLink = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("mobile-nav");
});

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const isOpen = content.style.maxHeight;
  // Close all open accordions
  document.querySelectorAll(".accordion-content").forEach((item) => {
    item.style.maxHeight = null;
    item.previousElementSibling.querySelector("span:last-child").textContent =
      "+";
  });

  // Toggle the clicked accordion
  if (!isOpen) {
    content.style.maxHeight = content.scrollHeight + "px";
    button.querySelector("span:last-child").textContent = "-";
  } else {
    content.style.maxHeight = null;
    button.querySelector("span:last-child").textContent = "+";
  }

  document.querySelectorAll(".accordion-content").style.marginBottom = "4rem";
}

let products = [];

async function fetchProducts() {
  try {
    const response = await fetch("products.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const productsData = await response.json();
    // console.log("Fetched Products Data:", productsData); // Log productsData for debugging

    products = productsData;

    bestSeller(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

const bestSeller = (products) => {
  // console.log(products);
  const popularProductsSection = document.getElementById(
    "popularProductsSection"
  );
  popularProductsSection.innerHTML = "";

  const popularProducts = products.flatMap((val) =>
    val.items.filter((val_) => val_.popular === "true")
  );

  const cluster = popularProducts
    .map((val_) => {
      return `
          <a href="/singleproduct.html?id=${val_.id}" class="product-link">
            <div class="product-card">
              <div class="product-content">
                <!-- Product Image -->
                <div class="product-image-bx">
                  <img src="${val_.img}" alt="${
        val_.name
      }" class="product-image"/>
                </div>
                <!-- Product Name and Description -->
                <div class="product-info">
                  <h1 class="product-name">${val_.name}</h1>
                  <p class="product-description">${val_.desc.substr(
                    0,
                    50
                  )}...</p>
                </div>
                <!-- Rating and Button -->
                <div class="product-btn">
                  <div class="rating">★★★★☆</div>
                  <button class="buy-now-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </a>
        `;
    })
    .join("");

  popularProductsSection.innerHTML = cluster;
};

const newArrival = (products) => {
  const popularProductsSection = document.getElementById(
    "popularProductsSection"
  );
  popularProductsSection.innerHTML = "";

  // Flatten the new arrival products
  const newArrivalProducts = products.flatMap((val) =>
    val.items.filter((val_) => val_.newArrival === "true")
  );

  // Create the HTML structure for new arrival products
  const cluster = newArrivalProducts
    .map((val_) => {
      return `
          <a href="/singleproduct.html?id=${val_.id}" class="product-link">
            <div class="product-card">
              <div class="product-content">
                <!-- Product Image -->
                <div class="product-image-bx">
                  <img src="${val_.img}" alt="${
        val_.name
      }" class="product-image"/>
                </div>
                <!-- Product Name and Description -->
                <div class="product-info">
                  <h1 class="product-name">${val_.name}</h1>
                  <p class="product-description">${val_.desc.substr(
                    0,
                    50
                  )}...</p>
                </div>
                <!-- Rating and Button -->
                <div class="product-btn">
                  <div class="rating">★★★★☆</div>
                  <button class="buy-now-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </a>
        `;
    })
    .join(""); // Join to create a single string for innerHTML

  popularProductsSection.innerHTML = cluster; // Set the innerHTML to the cluster
};
const topSeller = (products) => {
  const popularProductsSection = document.getElementById(
    "popularProductsSection"
  );
  popularProductsSection.innerHTML = "";

  // Flatten the new arrival products
  const topSellerProducts = products.flatMap((val) =>
    val.items.filter((val_) => val_.topSeller === "true")
  );

  const cluster = topSellerProducts
    .map((val_) => {
      return `
          <a href="/singleproduct.html?id=${val_.id}" class="product-link">
            <div class="product-card">
              <div class="product-content">
                <!-- Product Image -->
                <div class="product-image-bx">
                  <img src="${val_.img}" alt="${
        val_.name
      }" class="product-image"/>
                </div>
                <!-- Product Name and Description -->
                <div class="product-info">
                  <h1 class="product-name">${val_.name}</h1>
                  <p class="product-description">${val_.desc.substr(
                    0,
                    50
                  )}...</p>
                </div>
                <!-- Rating and Button -->
                <div class="product-btn">
                  <div class="rating">★★★★☆</div>
                  <button class="buy-now-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </a>
        `;
    })
    .join("");

  popularProductsSection.innerHTML = cluster; // Set the innerHTML to the cluster
};

// Event listeners for tab links
document
  .getElementById("bestSellerLink")
  .addEventListener("click", () => bestSeller(products));
document
  .getElementById("newArrivalLink")
  .addEventListener("click", () => newArrival(products));
document
  .getElementById("topSellerLink")
  .addEventListener("click", () => topSeller(products));

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});

// const options = [
//   "COATING & LAMINATIONS",
//   "PRINTING OPTIONS",
//   "SPECIAL FINISHES",
//   "PAPERBOARD",
//   "CORRUGATED",
//   "FLUTED GRADES",
//   "RIGID MATERIALS",
// ];

// const coatingData = [
//   {
//     category: "COATING & LAMINATIONS",
//     items: [
//       {
//         id: 1,
//         name: "Matte Lamination",
//         desc: "Durable matte finish",
//         img: "/images/coating1.png",
//       },
//       {
//         id: 2,
//         name: "Gloss Lamination",
//         desc: "High gloss finish",
//         img: "/images/coating1.png",
//       },
//       {
//         id: 3,
//         name: "Gloss Lamination",
//         desc: "High gloss finish",
//         img: "/images/coating1.png",
//       },
//       {
//         id: 4,
//         name: "Gloss Lamination",
//         desc: "High gloss finish",
//         img: "/images/coating1.png",
//       },
//     ],
//   },
//   {
//     category: "PRINTING OPTIONS",
//     items: [
//       {
//         id: 3,
//         name: "CMYK Printing",
//         desc: "Full color printing",
//         img: "/path/to/coating3.png",
//       },
//       {
//         id: 4,
//         name: "Spot UV",
//         desc: "Special UV coating",
//         img: "/path/to/coating4.png",
//       },
//     ],
//   },
//   // Add other categories with items here...
// ];

// let activeIndex = 0;

// function renderOptions() {
//   const navLinks = document.getElementById("nav-links");
//   navLinks.innerHTML = options
//     .map(
//       (option, index) => `
//       <li class="${
//         activeIndex === index ? "active-option" : "inactive-option"
//       }" onclick="handleClick(${index})">
//         ${option}
//       </li>
//     `
//     )
//     .join("");
// }

// function renderItems() {
//   const cardsContainer = document.getElementById("cards-container");
//   const filteredItems = coatingData
//     .filter((data) => data.category === options[activeIndex])
//     .map((data) => data.items)
//     .flat();

//   cardsContainer.innerHTML = filteredItems
//     .map(
//       (item) => `
//       <a href="/coatingProduct/${item.name.replace(
//         /\s+/g,
//         "-"
//       )}" class="coating-card">
//         <img src="${item.img}" alt="${item.name}" class="coating-image">
//         <div class="coating-info">
//           <h1 class="coating-title">${item.name}</h1>
//           <p class="coating-description">${item.desc}</p>
//         </div>
//       </a>
//     `
//     )
//     .join("");
// }

// function handleClick(index) {
//   activeIndex = index;
//   renderOptions();
//   renderItems();
// }

// // Initial rendering of options and items
// renderOptions();
// renderItems();
