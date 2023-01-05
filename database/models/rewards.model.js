const mongoose = require('mongoose')
const { Schema } = mongoose;
const rewardsSchema = Schema({
    rewards: [
        {
            rewardName: { type: String },
            rewardScore: { type: Number },
        }
    ],
    totlRewards: { type: Number }
})


const Rewards = mongoose.model("Rewards", rewardsSchema);

module.exports = Rewards;
