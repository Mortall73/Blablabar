import { Inject, Service } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import * as bcrypt from 'bcrypt';

import { User } from '../models/UserModel';

@Service()
export class UserService {
	constructor(
		@Inject(User) 
		private userModel: MongooseModel<User>
	) { }

	public async createUser(data: User): Promise<User> {
		const _user: User = data;
		const salt: string = await bcrypt.genSalt(10);
		const hashedPass: string = await bcrypt.hash(_user.password, salt);

		_user.password = hashedPass;

		const user = new this.userModel(_user);

		return await user.save();
	}

	public async findByEmail(email: string): Promise<User> {
		return await this.userModel.findOne({
			email: email
		}).exec();
	}

	public async verifyPassword(user: User, password: string) {
		return bcrypt.compare(password, user.password)
	}
}