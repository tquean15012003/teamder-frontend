import { userService } from "../../Services/UserService"
import { SET_USER_INFO } from "../Constants/UserConstants"

const updateUserInfoInReducer = (userInfo) => ({
    type: SET_USER_INFO,
    userInfo
})

export const updateProfileAction = (userInfo) => {
    return async (dispatch, getState) => {
        try {
            await userService.updateProfileService({...userInfo, yearOfStudy: parseInt(userInfo.yearOfStudy)})
            dispatch(updateUserInfoInReducer(userInfo))
            alert("Update profile successfully!")
        } catch (error) {
            console.log(error)
        }
    }
}

export const getProfileAction = () => {
    return async (dispatch, getState) => {
        try {
            const data = await userService.getProfileService()
            dispatch(updateUserInfoInReducer(data.data))
        } catch (error) {
            console.log(error)
        }
    }
}