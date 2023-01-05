const mongoose = require('mongoose')
const { Schema } = mongoose;
const rewardsSchema = Schema({
    rewards: [
        {
            rewardName: {
                type: String,
                required: true,
                trim: true
            },
            rewardScore: {
                type: Number,
                required: true,
            },
        }
    ],
    totlRewards: { type: Number }
})


const Rewards = mongoose.model("Rewards", rewardsSchema);

module.exports = Rewards;
