const rateLimit = require('express-rate-limit');

const signUpRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min in milliseconds
    max: 2,
    message: "Sign up error, you have reached maximum retries.Please try again after 30 minutes",
    statusCode: 429,
    headers: true,
});
module.exports = { signUpRateLimiter }