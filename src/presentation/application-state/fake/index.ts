import ApplicationState from '..';

export default class FakeApplicationState implements ApplicationState {
  isReady(): boolean {
    throw new Error('Method not implemented.');
  }
  setReady(value: boolean): void {
    throw new Error('Method not implemented.');
  }
}
