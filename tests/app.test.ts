import request from 'supertest';
import * as app from '../src/app';
import {Response} from 'express';

describe("Test the root path", () => {
    test("It should response the GET method", done => {
      request(app)
        .get("/")
        .then(Response=> {
          expect(Response).toBe(200);
          done();
        });
    });
  });