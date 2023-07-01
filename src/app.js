import express from 'express'
import router from './router.js'
import database from './database/index.js'
const app = express()
app.use(express.json())
app.use(router);

  
export default app;
  
 