import HealthCheckController from '.';
import FakeApplicationState from '../../../application-state/fake';
import FakeExpressFactory from '../../../../__mocks__/express/factory';

describe('HealthCheckController', () => {
  describe('getHealthState', () => {
    const NODE_VERSION = '16.14.0';
    const COMMIT_SHA = 'cf221f9a162cf80a67f1237318cf5193b9cdce83';
    const NODE_ENV = 'dev';
    const env = { NODE_VERSION, COMMIT_SHA, NODE_ENV };

    it('should return 503: SERVICE UNAVAILABLE while if the application is not ready', () => {
      const applicationState = new FakeApplicationState();
      jest.spyOn(applicationState, 'isReady').mockReturnValueOnce(false);

      const req = FakeExpressFactory.createRequest();
      const res = FakeExpressFactory.createResponse();

      const spyOnResponseStatus = jest.spyOn(res, 'status');
      const spyOnResponseJSON = jest.spyOn(res, 'json');

      const healthCheckController = new HealthCheckController({ env, applicationState });
      healthCheckController.getHealthState(req, res);

      expect(spyOnResponseStatus).toHaveBeenCalledWith(503);
      expect(spyOnResponseJSON).toHaveBeenCalledWith({ msg: 'Service temporarily unavailable' });
    });

    it('should return 200: OK and general app information if the application is ready', () => {
      const applicationState = new FakeApplicationState();
      jest.spyOn(applicationState, 'isReady').mockReturnValueOnce(true);

      const req = FakeExpressFactory.createRequest();
      const res = FakeExpressFactory.createResponse();
      const spyOnResponseJSON = jest.spyOn(res, 'json');

      const healthCheckController = new HealthCheckController({ env, applicationState });
      healthCheckController.getHealthState(req, res);

      expect(spyOnResponseJSON).toHaveBeenCalledWith({
        ready: true,
        nodeVersion: NODE_VERSION,
        commitSHA: COMMIT_SHA,
        environment: NODE_ENV,
      });
    });
  });
});
