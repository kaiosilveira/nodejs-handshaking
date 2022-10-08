export default interface ApplicationState {
  isReady(): boolean;
  setReady(value: boolean): void;
}
