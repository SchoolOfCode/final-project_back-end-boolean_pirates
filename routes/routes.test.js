import request from 'supertest';
import app from '../index.js';
import { test, expect, describe } from '@jest/globals';
// import { pool } from "../db/index.js";

// beforeAll (() => {dropEventsTable})

// afterAll(() => { pool.end() });

describe('Tests the post route for tutorials', () => {
  test('Checks the POST request for users is 200 and body is successfully returned', async () => {
    const data = {
      title: 'Jest & SuperTest Test',
      instructions: 'make it make it make it.',
      ability: 'Intermediate',
      creator: 'Joe',
      materials: 'plastic,wire,string',
      videoUrl:
        'https://res.cloudinary.com/dcyovjaom/image/upload/v1659515150/sample.jpg',
      imageUrl:
        'https://res.cloudinary.com/dcyovjaom/image/upload/v1659515179/cld-sample-5.jpg',
      likes: ['user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8'],
      comments: [
        'comment2',
        'comment3',
        'comment4',
        'comment5',
        'comment6',
        'comment7',
      ],
      favourites: [
        'like2',
        'like3',
        'like4',
        'like5',
        'like6',
        'like7',
        'like8',
      ],
    };

    const response = await request(app).post(`${ID}/tutorials/`).send(data);

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toEqual('Jest & SuperTest Test');
  });
});

describe('Test the GET route for tutorials', () => {
  test('Checks if the HTTP status code is 200', async () => {
    const response = await request(app).get('/tutorials');
    expect(response.statusCode).toBe(200);
  });
  test('Checks if the HTTP status code is 200', async () => {
    const ID = '62f525ce4a8d8fbe31d4ff12';
    const response = await request(app).get(`/tutorials/${ID}`);
    expect(response.statusCode).toBe(200);
  });

  // test("Checks the response's to a delete", async () => {
  //     const response = await request(app).delete("/tutorials/62f538369eebd5d65b01433d")
  //     expect(response.statusCode).toBe(200)
  // })
});

describe('test the patch routes', () => {
  test('tutorial is updated with a new like', async () => {
    const data = { userId: 'testID123' };
    const response = await app.patch(`${ID}/likeTutorial`).send(data);
    expect(response.statusCode).toBe(200);
    console.log(response.message);
  });
  test('tutorial is updated with a new comment', async () => {
    const ID = '/:62f525ce4a8d8fbe31d4ff12';
    const data = { addComments: 'this is a test comment' };
    const response = await await app.patch(`${ID}/commentTutorial`).send(data);
    expect(respone.statusCode).toBe(200);
    expect(response.body.title).toEqual(
      'Comment is succesfully added, this is a test comment'
    );
  });
});

/* router.get("/search", getTutorialsBySearch);

router.get("/:id", getTutorialById);

router.get("/", getTutorials);

router.post("/", createTutorial);

router.patch("/:id", updateTutorial);

router.delete("/:id", deleteTutorial);

router.patch("/:id/likeTutorial", likeTutorial);

router.patch("/:id/commentPost", commentTutorial); */
