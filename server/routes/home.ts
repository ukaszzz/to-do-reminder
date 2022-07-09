import * as express from 'express';

import {  } from '../controller/todo.controller';

const router = express.Router();

router.get('/', getHomeData);


export default router;