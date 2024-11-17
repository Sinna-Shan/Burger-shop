const router = require("express").Router();
const {
  getAllSuppliers,
  createSupplier,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");

router.route("/").get(getAllSuppliers).post(createSupplier);
router
  .route("/:id")
  .get(getSupplierById)
  .patch(updateSupplier)
  .delete(deleteSupplier);

module.exports = router;
