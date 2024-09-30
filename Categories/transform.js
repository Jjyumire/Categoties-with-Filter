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

const allItemsWithCategory = Object.entries(menu).reduce(
  (acc, [category, products]) => {
    const productsWithCategory = products.map((el) => ({
      ...el,
      category,
    }));
    return [...acc, ...productsWithCategory];
  },
  []
);

// const filteredData = allItemsWithCategory.filter(
//   (el) => el.category === "burgers"
// );
// console.log(filteredData);

// const arr = [1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 2];

// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr.indexOf(arr[i]));
// }
