
import { Controller, Get, PathParams } from "@tsed/common";
import {
	PostService
} from '../services/PostService';

@Controller('/posts')
export class PostsController {
	constructor(private postService: PostService) { }
	
	@Get()
	async getPosts() {
		const posts = await this.postService.getAll(); 

		return posts; 
	}

	@Get('/:id')
	async getPost(
		@PathParams('id')
		id: string
	) {
		const posts = await this.postService.getPostById(id); 

		return posts; 
	}
}