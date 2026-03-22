import mongoose from 'mongoose'
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    playerType: {
        type: String
    }
}
)


const enterPlayer = new mongoose.model("playerList", playerSchema)

export default enterPlayer