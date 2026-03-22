import mongoose from 'mongoose'

const TeamSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    catain: {
        type: String
    }
})


const submitTeam = new mongoose.model("teamregisters", TeamSchema)

export default submitTeam