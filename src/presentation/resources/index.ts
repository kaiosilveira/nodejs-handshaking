import { Router } from 'express';
import InMemoryApplicationState from '../application-state/in-memory';
import HealthCheckController, { ApplicationEnv } from './health-check/controller';

export default class PresentationResourcesManager {
  static configureRouter(router: Router) {
    const applicationState = new InMemoryApplicationState();
    const env: ApplicationEnv = {
      NODE_ENV: process.env.NODE_ENV || 'dev',
      COMMIT_SHA: process.env.COMMIT_SHA || 'unknown',
      NODE_VERSION: process.version,
    };

    const healthCheckCtrl = new HealthCheckController({ applicationState, env });

    router.get('/health', healthCheckCtrl.getHealthState);

    applicationState.setReady(true);
    return router;
  }
}
