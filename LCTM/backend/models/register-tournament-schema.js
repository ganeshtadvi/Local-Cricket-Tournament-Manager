import mongoose from 'mongoose'

const TournamentSchema = new mongoose.Schema({
    tournament_name: {
        required: true, type: String
    },
    location: {
        required: true, type: String
    },
    total_teams: {
        required: true, type: Number
    },
    total_Overs: {
        required: true, type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
})


const TourSchema = new mongoose.model('Tournament_Info', TournamentSchema)

export default TourSchema