import { BaseService } from "./BaseService";

export class AuthService extends BaseService {
    logInService = (logInInfo) => {
        return this.post('auth/signin', logInInfo);
    }
    signUpService = (signUpInfo) => {
        return this.post('auth/signup', signUpInfo);
    }
}

export const authService = new AuthService()