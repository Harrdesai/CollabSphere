// src/index.js

import dotenv from 'dotenv'
import { httpServer } from './utils/socket.js'

dotenv.config({
  path: './.env'
})

const port = process.env.PORT

httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
