const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
    try {
        const usernames = await User.find({});

        res.locals.users = usernames;

        res.render('users/index.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/:userId/show', async (req, res) => {
    try {
        const selectedUser = await User.findById(req.params.userId);

        res.locals.username = selectedUser;
        res.locals.pantry = selectedUser.pantry;

        res.render('users/show.ejs')
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
})

module.exports = router;