const router = require("express").Router();

const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  assignSupplierToProduct,
  removeSupplierFromProduct,
} = require("../controllers/productController");

router.route("/").get(getAllProducts).post(createProduct);
router
  .route("/:id")
  .get(getProductById)
  .patch(updateProduct)
  .delete(deleteProduct);
  
router.route("/assign").post(assignSupplierToProduct);
router.route("/remove").post(removeSupplierFromProduct);

module.exports = router;
