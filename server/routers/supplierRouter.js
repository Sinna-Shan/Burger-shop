const router = require("express").Router();
const {
  getAllSuppliers,
  createSupplier,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
  addProductsToSupplier,
  removeProductsFromSupplier,
} = require("../controllers/supplierController");

router.route("/").get(getAllSuppliers).post(createSupplier);
router
  .route("/:id")
  .get(getSupplierById)
  .patch(updateSupplier)
  .delete(deleteSupplier);

router.route("/assign").post(addProductsToSupplier);
router.route("/remove").post(removeProductsFromSupplier);

module.exports = router;
