import { Property, Required, Ignore  } from "@tsed/common";
import { Model, ObjectID } from "@tsed/mongoose";

@Model()
export class User {
	@Property()
	@Required()
    name: string;
    
    @Property()
	@Required()
    email: string;

    @Property()
	@Required()
	@Ignore()
	password: string;
}