import InMemoryApplicationState from '.';

describe('InMemoryApplicationState', () => {
  it('should return false by default', () => {
    const appState = new InMemoryApplicationState();
    expect(appState.isReady()).toBe(false);
  });

  it('should change state to ready after a setReady(true)', () => {
    const appState = new InMemoryApplicationState();
    appState.setReady(true);
    expect(appState.isReady()).toBe(true);
  });
});
