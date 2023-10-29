import { app } from './app'
import { env } from './env'

app.listen({
  port: env.PORT,
  host: '0.0.0.0'
}).then(() => {
  console.log(`Server is running on port ${env.PORT}`)
}).catch(() => {
  console.error('Error on initialize the project')
})
