const request = require("supertest")
const app = require("./server")


// Group tests together using "describe"
describe("API Tests", () => {
    // Test no.1: Test the root endpoint
    test("GET / should return success", async () => {
        const res = await request(app).get("/")

        expect(res.statusCode).toBe(200)
        expect(res.body.status).toBe("success")
    })

    // Test no.2: Test the /api/users endpoint
    test("GET /api/users should return users", async () => {
        const res = await request(app).get("/api/users")

        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
        expect(res.body.length).toBeGreaterThan(0)
    })

    // Test no.3: Test the /api/managers-specialists endpoint
    test("GET /api/managers-specialists should return only managers and specialists", async () => {
        const res = await request(app).get("/api/managers-specialists")

        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
        expect(res.body.length).toBeGreaterThan(0)
    })
})

