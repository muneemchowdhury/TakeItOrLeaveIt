const router = require("express").Router();
const recycleController = require("../../controllers/recycleController");


// Matches with "/api/books"
router.route("/")
    .get(recycleController.findAll)
    .post(recycleController.create);
// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(recycleController.findById)
    .put(recycleController.update)
    .delete(recycleController.remove);

module.exports = router;