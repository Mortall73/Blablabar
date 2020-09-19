import { Property, Required, Ignore } from "@tsed/common";
import { Model, ObjectID } from "@tsed/mongoose";

@Model()
export class Post {
	@ObjectID()
	_id: string;

	@Property()
	@Required()
	title: string;
}