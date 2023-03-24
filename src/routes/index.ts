import { Router } from 'express';
import * as PageController from '../controllers/PageController';
import * as SearchController from '../controllers/SearchController';

const routes = Router();

routes.get('/', PageController.home);
routes.get('/dogs', PageController.dogs);
routes.get('/cats', PageController.cats);
routes.get('/fishes', PageController.fishes);

routes.get('/search', SearchController.search);






export default routes;