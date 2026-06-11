const express = require("express")
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000
// const NODE_ENV = process.env.NODE_ENV || "development"

// In-memory media database
const USERS_DATABASE = [
    { id: 1, name: "Alice Smith", role: "DevOps Engineer", department: "Infrastructure" },
    { id: 2, name: "Bob Jones", role: "Software Engineer", department: "Backend" },
    { id: 3, name: "Charlie Brown", role: "QA Engineer", department: "Testing" },
    { id: 4, name: "Diana Prince", role: "Product Manager", department: "Product" },
    { id: 5, name: "Ethan Hunt", role: "Security Specialist", department: "Security" }
];
// ============================================
// ============================================
// ============================================

// Basic health check endpoint
app.get("/", (req, res) => {
    res.status(200).json({ 
        status: "success",
        env: process.env.NODE_ENV || "development",
        message: "Welcome to the Media API" })
})

// API endpoint to get media list
app.get("/api/media", (req, res) => {
    res.status(200).json(USERS_DATABASE)
})


if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Server running on port http://localhost:${PORT}`)
    })
}

module.exports = app