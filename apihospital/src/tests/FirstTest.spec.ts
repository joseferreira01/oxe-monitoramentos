import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Oxe dev'

  expect(user.name).toEqual('Oxe dev')
})
