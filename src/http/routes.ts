import { FastifyRequest, type FastifyInstance, FastifyReply } from 'fastify'
import { register } from './controllers/register'
import { authenticate } from './controllers/authenticate'
import { verifyJWT } from './middleware/verify-jwt'

export async function appRoutes (app: FastifyInstance) {
  app.post('/users', register)
  app.post('/session', authenticate)
  app.get('/authenticated', { onRequest: [verifyJWT] } ,async (request:FastifyRequest , response: FastifyReply) => {
    console.log(request.user.sub)
    response.status(200).send({ message: 'You are authenticated' })
  })
}
