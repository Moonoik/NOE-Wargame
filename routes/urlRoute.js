'use strict';
import { Router } from 'express';

let router = Router();

router.get('/', (req, res) => {
	res.render('index');
});
router.get('/Challenge', (req, res) => {
	res.render('challenge');
});
router.get('/Rank', (req, res) => {
	res.render('rank');
});
router.get('/Mypage', (req, res) => {
	res.render('mypage');
});
router.get('/admin', (req, res) => {
	res.render('admin/index');
});
router.get('/admin/Management', (req, res) => {
	res.render('admin/admin');
});

module.exports = router;