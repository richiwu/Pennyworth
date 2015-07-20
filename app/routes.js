//https://scotch.io/tutorials/easy-node-authentication-setup-and-local
var express = require('express');
var router = express.Router();


module.exports = function(passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    /* GET home page. */
    router.get('/', function(req, res) {
        res.render('index.ejs', { title: "PennyWorth"});
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    //sends successful login state back to angular
    router.get('/success', function(req, res){
        res.send({state: 'success', user: req.user ? req.user : null});
    });

    //sends failure login state back to angular
    router.get('/failure', function(req, res){
        res.send({state: 'failure', user: null, message: req.flash('errorMessage')});
    });

   // process the signup form
   // there are other ways to hand the redirection: check back to tutorial for using "done"
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/success', // redirect to the secure profile section
        failureRedirect : '/failure', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // process the login form
    router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/success', // redirect to the secure profile section
        failureRedirect : '/failure', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    return router;
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
















// // =====================================
//     // LOGIN ===============================
//     // =====================================
//     // show the login form
//     app.get('/login', function(req, res) {

//         // render the page and pass in any flash data if it exists
//         res.render('pages/login.ejs', { message: req.flash('loginMessage') }); 
//     });

//     // process the login form
//     // app.post('/login', do all our passport stuff here);

//     // =====================================
//     // SIGNUP ==============================
//     // =====================================
//     // show the signup form
//     app.get('/signup', function(req, res) {

//         // render the page and pass in any flash data if it exists
//         res.render('pages/signup.ejs', { message: req.flash('signupMessage') });
//     });

//     // process the signup form
//     // app.post('/signup', do all our passport stuff here);

//     // =====================================
//     // PROFILE SECTION =====================
//     // =====================================
//     // we will want this protected so you have to be logged in to visit
//     // we will use route middleware to verify this (the isLoggedIn function)
//     app.get('/profile', isLoggedIn, function(req, res) {
//         res.render('pages/profile.ejs', {
//             user : req.user // get the user out of session and pass to template
//         });
//     });

//     // =====================================
//     // SERVICE SECTION =====================
//     // =====================================


//     app.get('/service',  function(req, res) {
//         res.render('pages/service.ejs', {
//         });
//     });