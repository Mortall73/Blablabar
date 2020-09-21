/**
 * https://tsed.io/tutorials/passport.html#create-a-new-protocol
 */
import { BodyParams, Req } from "@tsed/common";
import { OnInstall, OnVerify, Protocol } from "@tsed/passport";
import { IStrategyOptions, Strategy } from "passport-local";

import { UserService } from '../services/UserService';
import { Credentials } from '../types/types';

@Protocol<IStrategyOptions>({
    name: "login",
    useStrategy: Strategy,
    settings: {
        usernameField: "email",
        passwordField: "password"
    }
})
export class LoginLocalProtocol implements OnVerify, OnInstall {
    constructor(private userService: UserService) {
    }

    async $onVerify(@Req() request: Req, @BodyParams() credentials: Credentials) {
        const { email, password } = credentials;
    
        const user = await this.userService.findByEmail(email);
    
        if (!user) {
          return false;
          // OR throw new NotAuthorized("Wrong credentials")
        }
    
        if (!this.userService.verifyPassword(user, password)) {
          return false;
          // OR throw new NotAuthorized("Wrong credentials")
        }
    
        return user;
    }
    $onInstall(strategy: Strategy): void {
        // intercept the strategy instance to adding extra configuration
    }
}