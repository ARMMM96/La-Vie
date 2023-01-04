const rateLimit = require('express-rate-limit');

const updateRateLimiter = rateLimit({
    windowMs: 1440 * 60 * 1000, // 1440 min in milliseconds  => 24 hours
    max: 2,
    message: "Update profile error, you have reached maximum retries.Please try again after 24 hours",
    statusCode: 429,
    headers: true,
});
module.exports = { updateRateLimiter }