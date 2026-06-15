const express = require("express")
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000
// =====================================

// Mock database of users containing employees, managers, and specialists
const USERS_DATABASE = [
    { id: 1, name: "Alice Smith", role: "DevOps Engineer", department: "Infrastructure" },
    { id: 2, name: "Bob Jones", role: "Software Engineer", department: "Backend" },
    { id: 3, name: "Charlie Brown", role: "QA Engineer", department: "Testing" },
    { id: 4, name: "Diana Prince", role: "Product Manager", department: "Product" },
    { id: 5, name: "Ethan Hunt", role: "Security Specialist", department: "Security" },
    { id: 6, name: "Fiona Gallagher", role: "UX Designer", department: "Design" },
    { id: 7, name: "George Martin", role: "Data Scientist", department: "Data" },
    { id: 8, name: "Hannah Lee", role: "HR Manager", department: "Human Resources" },
    { id: 9, name: "Ian Wright", role: "Marketing Specialist", department: "Marketing" },
    { id: 10, name: "Jane Doe", role: "Customer Support", department: "Support" },
    { id: 11, name: "Kevin Turner", role: "Finance Manager", department: "Finance" },
    { id: 12, name: "Laura Wilson", role: "Operations Specialist", department: "Operations" },
    { id: 13, name: "Michael Scott", role: "Regional Manager", department: "Sales" },
    { id: 14, name: "Nina Patel", role: "Content Specialist", department: "Content" },
    { id: 15, name: "Oscar Martinez", role: "Accountant", department: "Finance" }
];
// ============================================
// ============================================


// Basic health check endpoint
app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        env: process.env.NODE_ENV || "development",
        message: "Welcome to the Media API"
    })
})


// API endpoint to get user list
app.get("/api/users", (req, res) => {
    res.status(200).json(USERS_DATABASE)
})


// API endpoint to get only managers and specialists
app.get("/api/managers-specialists", (req, res) => {
    const managersAndSpecialists = USERS_DATABASE.filter(user => 
        user.role.includes("Manager") ||
        user.role.includes("Specialist")
    )
    
    res.status(200).json(managersAndSpecialists)
})


if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Server running on port http://localhost:${PORT}`)
    })
}

module.exports = app
