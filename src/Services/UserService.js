import { USERNAME } from "../Settings/Settings";
import { BaseService } from "./BaseService";

export class UserService extends BaseService {
    updateProfileService = (profile) => {
        return this.put('users/updateProfile', profile);
    }

    getProfileService = () => {
        return this.get(`users/getProfile/${localStorage.getItem(USERNAME)}`);
    }
    
}

export const userService = new UserService()