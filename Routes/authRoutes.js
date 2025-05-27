const express = require('express'); 
const router = express.Router();
const authController = require('../Controller/authController');

// Test route to check route-controller connection
router.get('/test', (req, res) => {
  res.send('Auth routes and controller are connected!');
});

// Root route
router.get('/', (req, res) => {
  res.render('pages/landing');
});

// Signup
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);

// Email verification
router.get('/verify-email', authController.verifyEmail);

// Login
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

// Forgot and reset password
router.get('/forgot-password', authController.getForgotPassword);
router.post('/forgot-password', authController.forgotPassword);
router.get('/reset-password', authController.getResetPassword);
router.post('/reset-password', authController.resetPassword);

// Export router once, at the end
module.exports = router;

