const router = require("express").Router();

const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  assignSupplierToProduct,
} = require("../controllers/productController");

router.route("/").get(getAllProducts).post(createProduct);
router
  .route("/:id")
  .get(getProductById)
  .patch(updateProduct)
  .delete(deleteProduct);
  
router.route("/assign").post(assignSupplierToProduct);

module.exports = router;
