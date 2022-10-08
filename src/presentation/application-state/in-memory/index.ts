import ApplicationState from '..';

export default class InMemoryApplicationState implements ApplicationState {
  private _isReady: boolean;

  constructor() {
    this._isReady = false;
  }

  setReady(value: boolean): void {
    this._isReady = value;
  }

  isReady(): boolean {
    return this._isReady;
  }
}
