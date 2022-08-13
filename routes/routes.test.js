import request from "supertest";
import app from "../index.js";
import { test, expect } from "@jest/globals";
// import { pool } from "../db/index.js";

// beforeAll (() => {dropEventsTable})

// afterAll(() => { pool.end() });

describe("Test the GET route for tutorials", ()=>{
    test("Checks if the HTTP status code is 200", async()=>{
        const response = await request(app).get("/tutorials")
        expect(response.statusCode).toBe(200);
    })
    test("Checks if the HTTP status code is 200", async()=>{
        const response = await request(app).get("/tutorials/62f525ce4a8d8fbe31d4ff12")
        expect(response.statusCode).toBe(200);
    })
    test("Checks the POST request for users is 200 and body is successfully returned", async () => {
        const data =    
        {
          "title": "Jest & SuperTest Test",
          "instructions": "make it make it make it.",
          "ability": "Intermediate",
          "creator": "Joe",
          "materials": "plastic,wire,string",
          "videoUrl": "https://res.cloudinary.com/dcyovjaom/image/upload/v1659515150/sample.jpg",
          "imageUrl": "https://res.cloudinary.com/dcyovjaom/image/upload/v1659515179/cld-sample-5.jpg",
          "likes": ["user2", "user3", "user4", "user5", "user6", "user7", "user8"],
          "comments": ["comment2", "comment3", "comment4", "comment5", "comment6", "comment7"],
          "favourites": ["like2", "like3", "like4", "like5", "like6", "like7", "like8"]
          }
        
        const response = await request(app).post("/tutorials/").send(data)

        expect(response.statusCode).toBe(201)
        expect(response.body.title).toEqual("Jest & SuperTest Test")
    })

    // test("Checks the response's to a delete", async () => {
    //     const response = await request(app).delete("/tutorials/62f538369eebd5d65b01433d")
    //     expect(response.statusCode).toBe(200)
    // })
});