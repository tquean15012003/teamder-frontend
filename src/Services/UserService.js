import { USERNAME } from "../Settings/Settings";
import { BaseService } from "./BaseService";

export class UserService extends BaseService {
    updateProfileService = (profile) => {
        return this.put('users/updateProfile', profile);
    }

    getProfileService = () => {
        return this.get(`users/getProfile/${localStorage.getItem(USERNAME)}`);
    }
    
    getProfileByCourseService = (course) => {
        return this.get(`courses/getInterestedUsers/${course}`);
    }

    getMatchService = () => {
        return this.post(`users/getMatch`);
    }

    swipeLeftService = (username) => {  
        return this.post("users/swipeLeft", username);
    }
    
    swipeRightService = (username) => {
        return this.post("users/swipeRight", username);
    }
}

export const userService = new UserService()