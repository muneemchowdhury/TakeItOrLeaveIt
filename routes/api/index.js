const router = require("express").Router();
//const router2 = require("express").Router();
const recycleRoutes = require("./recycle");
//const itemRoutes = require("./item")

//  routes
router.use("/recycle", recycleRoutes);
//router2.use("/item", itemRoutes)

module.exports = router;