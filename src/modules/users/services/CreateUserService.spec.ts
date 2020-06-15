import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUserRepository);

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create two users with the same email', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUserRepository);

    const userEmail = 'johndoe@gmail.com';

    await createUser.execute({
      name: 'John Doe',
      email: userEmail,
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'John Doe',
        email: userEmail,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
