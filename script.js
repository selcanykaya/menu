const menu = [
  {
    id: 1,
    title: "Quantum Delight",
    category: "breakfast",
    price: 15.99,
    img: "https://picsum.photos/seed/item1/400/300",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore laboriosam excepturi!`
  },
  {
    id: 2,
    title: "Nebula Fusion",
    category: "lunch",
    price: 13.99,
    img: "https://picsum.photos/seed/item2/400/300",
    desc: `Vero a incidunt. Lorem ipsum dolor sit amet consectetur elit. Nesciunt excepturi nostrum dolorem maiores magni.`
  },
  {
    id: 3,
    title: "Cosmic Crunch",
    category: "shakes",
    price: 6.99,
    img: "https://picsum.photos/seed/item3/400/300",
    desc: `Omnis iste corrupti blanditiis perferendis consectetur excepturi modi qui animi dolorum expedita.`
  },
  {
    id: 4,
    title: "Solar Burst",
    category: "breakfast",
    price: 20.99,
    img: "https://picsum.photos/seed/item4/400/300",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.`
  },
  {
    id: 5,
    title: "Galactic Cheese",
    category: "lunch",
    price: 22.99,
    img: "https://picsum.photos/seed/item5/400/300",
    desc: `Franzen vegan pabst bicycle rights kickstarter pinterest keytar polaroid farm-to-table offal.`
  },
  {
    id: 6,
    title: "Orion Dreams",
    category: "shakes",
    price: 18.99,
    img: "https://picsum.photos/seed/item6/400/300",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.`
  },
  {
    id: 7,
    title: "Stardust Special",
    category: "breakfast",
    price: 8.99,
    img: "https://picsum.photos/seed/item7/400/300",
    desc: `Carry jianbing normcore freegan. Viral single-origin coffee live-edge, poke tbh bicycle.`
  },
  {
    id: 8,
    title: "Meteor Mash",
    category: "lunch",
    price: 12.99,
    img: "https://picsum.photos/seed/item8/400/300",
    desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix.`
  },
  {
    id: 9,
    title: "Aurora Blast",
    category: "shakes",
    price: 16.99,
    img: "https://picsum.photos/seed/item9/400/300",
    desc: `Tumblr mixtape austin, family dollar try-hard prism kale chips gluten-free.`
  },
  {
    id: 10,
    title: "Eclipse Edition",
    category: "dinner",
    price: 22.99,
    img: "https://picsum.photos/seed/item10/400/300",
    desc: `Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually.`
  },
  {
    id: 11,
    title: "Supernova Surprise",
    category: "dinner",
    price: 25.99,
    img: "https://picsum.photos/seed/item11/400/300",
    desc: `Crucifix hella art party raw denim actually chicharrones. Thundercats mustache gluten-free.`
  },
  {
    id: 12,
    title: "Asteroid Affair",
    category: "dinner",
    price: 19.99,
    img: "https://picsum.photos/seed/item12/400/300",
    desc: `Vice palo santo bespoke, aesthetic williamsburg tacos gochujang quinoa helvetica vape.`
  }
];

const sectionCenter = document.getElementById("menu");
const btnContainer = document.getElementById("btn-container");

// Display menu items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src="${item.img}" alt="${item.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// Display buttons
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id="${category}">
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  // Set first button as active
  filterBtns[0].classList.add("active");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // Remove active class from all buttons
      filterBtns.forEach(function (button) {
        button.classList.remove("active");
      });
      // Add active class to clicked button
      e.currentTarget.classList.add("active");

      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

// Load items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});
