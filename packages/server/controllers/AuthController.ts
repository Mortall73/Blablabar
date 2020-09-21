
import { Controller, Post, BodyParams, Req, Returns, Res } from "@tsed/common";
import {Authenticate} from "@tsed/passport";

import { Credentials } from '../types/types';
import { User } from '../models/UserModel';

@Controller('/auth')
export class PostsController {
	
	@Post("/login")
    @Authenticate("login")
    @Returns(200, User)
    login(
        @Req()
        req: Req, 
        @BodyParams()
        body: Credentials
    ) {
        // FACADE
        //return req.;
    }
}