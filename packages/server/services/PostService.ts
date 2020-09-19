import { Inject, Service } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";

import { Post } from '../models/PostModel';

@Service()
export class PostService {
	constructor(
		@Inject(Post) 	private PostModel: MongooseModel<Post>
	) { }

	public async getAll(): Promise<Post[]> {
		const posts = await this.PostModel.find({}, {
			_id: true,
			title: true,
		}).exec();

		return posts;
	}

	public async getPostById(id: string): Promise<Post> {
		return await this.PostModel.findById(id).exec();
	}

	public async create(data: Post): Promise<Post> {
		const post = new this.PostModel(data);

		return await post.save();
	}
}