
import { Controller, Post, BodyParams } from "@tsed/common";

import { UserService } from '../services/UserService';
import { registrationPayload } from '../types/types';

@Controller('/users')
export class PostsController {
	constructor(private userService: UserService) { }
	


	@Post('/')
	async registerUser(
		@BodyParams()
		body: registrationPayload
	) {
		return this.userService.createUser(body)
	}
}