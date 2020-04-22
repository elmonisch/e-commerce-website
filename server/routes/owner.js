const router = require("express").Router(); // why use Router? because we want to group the api
const Owner = require("../models/owner");
const upload = require("../middlewares/upload-photo");

// POST api
router.post("/owners", upload.single("photo"), async (req, res) => {
    try {
        let owner = Owner();
        owner.name = req.body.name;
        owner.about = req.body.about;
        owner.photo = req.file.location;

        await owner.save();

        res.json({
            success: true,
            message: "Usccesfully added owner"
        });
    } catch (err) {
        res.status(500).json({
            success: true,
            message: err.message
        });
    }
});

// GET api
router.get("/owners", async (req, res) => {
    try {
        let owners = await Owner.find();

        res.json({
            success: true,
            owners: owners
        });
    } catch (err) {
        res.status(500).json({
            success: true,
            message: err.message
        });
    }
});

module.exports = router;