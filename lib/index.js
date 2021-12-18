import slugify from "slugify";

export const getAllProductsFromCategory = async (category) => {
  const categoryList = [
    "candies",
    "topicals-tinctures",
    "pets",
    "culinary",
    "accessories",
  ];

  if (!categoryList.includes(category)) {
    return "Please enter correct category.";
  }

  // Topicals and tinctures need some configuring due to the difference in strapi slug and client slug

  if (category === "topicals-tinctures") {
    category = "topicals-and-tinctures";
  }

  const response = await fetch(
    `${process.env.STRAPI_URL}/categories?slug=${category}`
  );
  const categories = await response.json();
  return categories[0].products;
};

// export const getBgImageFromPath = (path, legend) => {
//   console.log(path.slice(9));

//   const category = Object.keys(legend).filter(
//     (key) => key === path.slice(1) || key === path.slice(10)
//   );

//   console.log(category);

//   return legend[category];
// };
