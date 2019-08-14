const router = require("express").Router();
const recycleController = require("../../controllers/recycleController");


// // Matches with "/api/recycle"

router.route("/")
    //         const foundAll = recycleController.findAll()
    //         console.log('I am here, I live, I exist');
    //         console.log(foundAll)
    //     })
    .get(recycleController.findAll)
    .post(recycleController.create);

// // Matches with "/api/recycle/:id"
router
    .route("/:id")
    .get(recycleController.findById)
    .put(recycleController.update)
    .delete(recycleController.remove);

module.exports = router;