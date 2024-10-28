const hamburger = document.querySelector(".hamburger-menu");
const navLink = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("mobile-nav");
});

// faq according functionality start
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
// faq according functionality end

const options = [
  "COATING & LAMINATIONS",
  "PRINTING OPTIONS",
  "SPECIAL FINISHES",
  "PAPERBOARD",
  "CORRUGATED",
  "FLUTED GRADES",
  "RIGID MATERIALS",
];

const coatingData = [
  {
    category: "COATING & LAMINATIONS",
    items: [
      {
        id: 1,
        name: "Matte Lamination",
        desc: "Durable matte finish",
        img: "/images/coating1.png",
      },
      {
        id: 2,
        name: "Gloss Lamination",
        desc: "High gloss finish",
        img: "/images/coating1.png",
      },
      {
        id: 3,
        name: "Gloss Lamination",
        desc: "High gloss finish",
        img: "/images/coating1.png",
      },
      {
        id: 4,
        name: "Gloss Lamination",
        desc: "High gloss finish",
        img: "/images/coating1.png",
      },
    ],
  },
  {
    category: "PRINTING OPTIONS",
    items: [
      {
        id: 3,
        name: "CMYK Printing",
        desc: "Full color printing",
        img: "/path/to/coating3.png",
      },
      {
        id: 4,
        name: "Spot UV",
        desc: "Special UV coating",
        img: "/path/to/coating4.png",
      },
    ],
  },
  // Add other categories with items here...
];

let activeIndex = 0;

function renderOptions() {
  const navLinks = document.getElementById("nav-links");
  navLinks.innerHTML = options
    .map(
      (option, index) => `
      <li class=" ${
        activeIndex === index
          ? "text-black bg-white rounded-full py-[10px] px-[15px]"
          : "text-white"
      } transition-colors duration-300 ease-linear cursor-pointer font-bold" 
          onclick="handleClick(${index})">
        ${option}
      </li>
    `
    )
    .join("");
}

function renderItems() {
  const cardsContainer = document.getElementById("cards-container");
  const filteredItems = coatingData
    .filter((data) => data.category === options[activeIndex])
    .map((data) => data.items)
    .flat();

  cardsContainer.innerHTML = filteredItems
    .map(
      (item) => `
      <a href="/coatingProduct/${item.name.replace(
        /\s+/g,
        "-"
      )}" class="coating-card flex flex-col gap-2 bg-white rounded-2xl overflow-hidden">
        <img src="${item.img}" alt="${
        item.name
      }" class="w-full h-40 object-cover">
        <div class="coating-info p-4">
          <h1 class="font-bold mb-2 text-base sm:text-sm">${item.name}</h1>
          <p class="text-xs sm:text-[12px]">${item.desc}</p>
        </div>
      </a>
    `
    )
    .join("");
}

function handleClick(index) {
  activeIndex = index;
  renderOptions();
  renderItems();
}

// Initial rendering of options and items
renderOptions();
renderItems();

//  <!-- <div className="footer-col mt-4">
//                 <div className="hd">Install App</div>
//                 <div className="links mt-4">
//                   <p>From App Store or Google Play</p>

//                   <div className="row imgs my-4">
//                     <div className="col-6 pr-0">
//                       <img src={appstore} alt="" />
//                     </div>
//                     <div className="col-6 pl-0">
//                       <img src={googlestore} alt="" />
//                     </div>
//                   </div>

//                   <p>Secured Payment Gateways</p>
//                   <div className="mt-4">
//                     <img src={payment} alt="" />
//                   </div>
//                 </div>
//               </div>  -->
