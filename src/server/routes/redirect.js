const express = require(`express`);
const router = express.Router();

router.get(`/discord`, (req, res, next) => res.redirect(`https://discord.io/AllianceReunited`));
router.get(`/admin`, (req, res, next) => res.redirect(`https://www.youtube.com/watch?v=xvFZjo5PgG0`));
router.get(`/minecraft`, (req, res, next) => res.redirect(`https://map.fortressmc.cf`));
router.get(`/iw4m`, (req, res, next) => res.redirect(`https://pw.alru.ga`));
router.get(`/sfx`, (req, res, next) => res.redirect(`https://sfx.alru.ga`));
router.get(`/sharex`, (req, res, next) => res.redirect(`https://share.alru.ga`));
router.get(`/speed`, (req, res, next) => res.redirect(`https://speed.alru.ga`));
router.get(`/share`, (req, res, next) => res.redirect(`https://share.alru.ga`));

module.exports = router;