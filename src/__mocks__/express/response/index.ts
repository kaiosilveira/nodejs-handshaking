import { Response } from 'express';

export default class FakeExpressResponse {
  private _statusCode: number;

  constructor() {
    this._statusCode = 200;
  }

  status(code: number): Response {
    this._statusCode = code;
    return this as unknown as Response;
  }

  json(body: object): any {
    return { status: this._statusCode, body };
  }
}
