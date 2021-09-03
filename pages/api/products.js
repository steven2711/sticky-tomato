// Test data
const products = require("../../data/products");

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, msg: "Method not allowed." });
  }

  // Filter data with query

  const filters = [
    "candies",
    "topicals-tinctures",
    "pets",
    "culinary",
    "accessories",
    "coa",
  ];

  // if (filters.includes(req.query.filter)) {
  //   const data = products.filter(
  //     (product) => product.category === req.query.filter
  //   );

  //   return res.status(200).json({ success: true, data });
  // }

  // Get product data from Supabase
  //
  //
  //
  // all test data
  res.status(200).json({ success: true });
}
