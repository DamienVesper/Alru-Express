const express = require(`express`);
const router = express.Router();

router.get(`/discord`, (req, res, next) => res.redirect(`https://discord.io/AllianceReunited`));
router.get(`/admin`, (req, res, next) => res.redirect(`https://www.youtube.com/watch?v=xvFZjo5PgG0`));

module.exports = router;