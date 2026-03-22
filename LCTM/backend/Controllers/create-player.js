import enterPlayer from '../models/create-player-Schema.js'

const submitPlayer = async (req, res) => {
    try {
        const submitPlayerInfo = await enterPlayer.create(req.body)
        res.send("Player information submitted..")
    }
    catch (err) {
        res.send("Something goes wrong. please enter valid data")
    }
}


export default submitPlayer