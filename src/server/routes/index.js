const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res, next) => res.render(`index.ejs`));
router.get(`/about`, (req, res, next) => res.render(`about.ejs`));
router.get(`/iw4m`, (req, res, next) => res.render(`iw4m.ejs`));
router.get(`/minecraft`, (req, res, next) => res.render(`minecraft.ejs`));

module.exports = router;