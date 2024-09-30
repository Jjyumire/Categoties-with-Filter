const generateUniqueCategories = (allItemsWithCategory) => {
  const result = [];

  allItemsWithCategory.forEach((el) => {
    // if (result.indexOf(el.category) === -1) {
    //   result.push(el.category);
    // }
    // if (!result.includes(el.category)) {
    //   result.push(el.category);
    // }
  });

  return result;
};
const uniqueCategories = generateUniqueCategories(allItemsWithCategory);
console.log(uniqueCategories);
