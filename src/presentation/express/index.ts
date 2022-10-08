import Express from 'express';
import Helmet from 'helmet';

import PresentationResourcesManager from '../resources';

export default class ExpressAppFactory {
  static createApp() {
    const app = Express();

    app.use(Helmet());
    app.use(Express.json());
    app.use(Express.urlencoded({ extended: true }));
    app.use(PresentationResourcesManager.configureRouter(Express.Router()));

    return app;
  }
}
