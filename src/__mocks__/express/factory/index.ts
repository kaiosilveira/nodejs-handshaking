import { Request, Response } from 'express';
import FakeExpressResponse from '../response';

export default class FakeExpressFactory {
  static createRequest({ headers, body } = { headers: {}, body: {} }): Request {
    return { headers, body } as unknown as Request;
  }

  static createResponse(): Response {
    return new FakeExpressResponse() as unknown as Response;
  }
}
