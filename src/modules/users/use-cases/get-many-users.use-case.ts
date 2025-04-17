import { User } from "../domain/user.entity";
import { UserRepository } from "../infrastructure/repositories/user-repository.interface";

export class GetManyUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getMany();
  }
}