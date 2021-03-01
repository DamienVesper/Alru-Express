const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res, next) => res.render(`index.ejs`));
router.get(`/about`, (req, res, next) => res.render(`about.ejs`));
router.get(`/secret`, (req, res, next) => res.render(`secret.ejs`));

module.exports = router;