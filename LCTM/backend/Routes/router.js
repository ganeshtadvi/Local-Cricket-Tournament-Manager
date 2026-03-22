import express from 'express'
import createTournament from '../Controllers/register-tournament.js'
import registerTeam from '../Controllers/create-Teams.js'
import submitPlayer from '../Controllers/create-player.js'
const router = express.Router()


router.get("/users", (req, res) => {
    res.send("users api is called")
})
router.post('/tournament', createTournament)
router.post('/createTeams', registerTeam)
router.post('/createPlayer', submitPlayer)






export default router