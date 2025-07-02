import supertest from "supertest";
import app from "../src/app.js";



describe("POST /users", ()=>{

    describe("given  a username and password",()=>{
        test("should respond woth a 200 status code", async ()=>{
            const response = await supertest(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.statusCode).toBe(200)
        })
    })

    describe("username or password is invalid",()=>{

    })

})