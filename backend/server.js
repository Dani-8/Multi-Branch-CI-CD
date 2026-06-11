const express = require("express")
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000
// const NODE_ENV = process.env.NODE_ENV || "development"

// In-memory media database
const MEDIA_DATABASE = [
    { id: 1, title: "Attack on Titan", type: "anime", rating: 9.0, trending: true, image: "🔥", desc: "Humans fight for survival against giant humanoid Titans.", genre: "Action, Dark Fantasy" },
    { id: 2, title: "Inception", type: "movie", rating: 8.8, trending: true, image: "🌀", desc: "A thief who steals corporate secrets through use of dream-sharing technology.", genre: "Sci-Fi, Thriller" },
    { id: 3, title: "Frieren: Beyond Journey's End", type: "anime", rating: 9.1, trending: false, image: "🪄", desc: "An elf mage re-evaluates life and connections after her party defeats the Demon King.", genre: "Adventure, Drama" },
    { id: 4, title: "Interstellar", type: "movie", rating: 8.6, trending: false, image: "🚀", desc: "A team of explorers travel through a wormhole in search of a new home for humanity.", genre: "Sci-Fi, Adventure" }
]
// ============================================
// ============================================
// ============================================

// API endpoint to get media list
app.get("/api/media", (req, res) => {
    res.status(200).json(MEDIA_DATABASE)
})


if(process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Server running on port http://localhost:${PORT}`)
    })
}

module.exports = app