import { FastifyRequest, type FastifyInstance, FastifyReply } from 'fastify'
import { register } from './controllers/register'
import { authenticate } from './controllers/authenticate'

export async function appRoutes (app: FastifyInstance) {
  app.post('/users', register)
  app.post('/session', authenticate)
  app.get('/authenticated', async (request:FastifyRequest , response: FastifyReply) => {
    await request.jwtVerify()


    console.log(request.user.sub)
    response.status(200).send()
  })
}
