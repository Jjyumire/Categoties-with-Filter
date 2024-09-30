const menu = {
  burgers: [
    {
      name: "super burger",
      img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg",
      price: 100,
    },
    {
      name: "pro burger",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg",
      price: 150,
    },
    {
      name: "extra burger",
      img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg",
      price: 180,
    },
  ],
  pizzas: [
    {
      name: "italian pizza",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg",
      price: 300,
    },
    {
      name: "meat pizza",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg",
      price: 400,
    },
  ],
  drinks: [
    {
      name: "pivo",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg",
      price: 500,
    },
    {
      name: "vino",
      img: "https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg",
      price: 1000,
    },
    {
      name: "vodka",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU",
      price: 2000,
    },
    {
      name: "tequila",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/15-09-26-RalfR-WLC-0244.jpg/220px-15-09-26-RalfR-WLC-0244.jpg",
      price: 3000,
    },
  ],
};

// transform data
const generateAllMenu = (menu) => {
  return Object.values(menu).reduce((acc, rec) => {
    return [...acc, ...rec];
  }, []);
};
const allMenu = generateAllMenu(menu);

const generateEntriesWithButtonText = (menu) => {
  return Object.entries(menu).map(([key, array]) => [
    key.slice(0, 1).toUpperCase() + key.slice(1, -1),
    array,
  ]);
};
const entries = generateEntriesWithButtonText(menu);

const generateFinalData = (entries, allMenu) => {
  return [["Menu List", allMenu], ...entries];
};
const finalData = generateFinalData(entries, allMenu);
// transform data

// dom queries
const output = document.querySelector(".output");
const buttonWrap = document.querySelector(".buttonWrap");
// dom queries

//List UI render
const renderProducts = (data) => {
  output.innerHTML = "";
  data.forEach((el) => {
    const box = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("p");
    const price = document.createElement("p");

    img.src = el.img;
    title.textContent = el.name;
    price.textContent = el.price;

    box.append(img, title, price);
    output.append(box);
  });
};
renderProducts(allMenu);
//List UI render

// Button UI render and event
const renderButtons = (finalData) => {
  finalData.forEach(([text, array]) => {
    const button = document.createElement("button");

    button.textContent = text;

    button.addEventListener("click", () => {
      renderProducts(array);
    });

    buttonWrap.append(button);
  });
};
renderButtons(finalData);
// Button UI render and event
