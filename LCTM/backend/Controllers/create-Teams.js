import submitTeam from '../models/create-Teams-Schema.js'


const registerTeam = async (req, res) => {
    try {
        const teamRegister = await submitTeam.create(req.body)
        res.send("team registed.........")
    } catch (err) {
        res.send(`something goes wrong: , ${err}`)
    }
}

export default registerTeam