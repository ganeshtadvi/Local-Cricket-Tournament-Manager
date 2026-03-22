
import TourSchema from '../models/register-tournament-schema.js'

const createTournament = async (req, res) => {
    try {
        const registerTournament = await TourSchema.create  (req.body)
        res.json({
            success: true,
            message: "Tournament created",
        })
    }
    catch (err) {
        res.send(`something goes wrong: , ${err}`)
    }
}

export default createTournament