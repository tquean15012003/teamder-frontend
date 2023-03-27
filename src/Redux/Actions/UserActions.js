import { userService } from "../../Services/UserService"
import { USERNAME } from "../../Settings/Settings"
import { SET_MATCH, SET_SWIPE_USER, SET_USER_INFO } from "../Constants/UserConstants"

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

export const getProfileByCourseAction = (course, setSwipeUser) => {
    return async (dispatch, getState) => {
        try {
            const data = await userService.getProfileByCourseService(course)
            console.log(data)
            const swipeUser = data.data.filter(user => user.username !== localStorage.getItem(USERNAME))
            setSwipeUser([...swipeUser])
            dispatch({
                type: SET_SWIPE_USER,
                swipeUser: swipeUser
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getMatchAction = () => {
    return async (dispatch, getState) => {
        try {
            const data = await userService.getMatchService()
            dispatch({
                type: SET_MATCH,
                match: data.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const swipeAction = (direction, username) => {
    return async (dispatch, getState) => {
        try {
            let data
            if (direction === "right") {
                data = await userService.swipeRightService({swipedUsername: username})
            } else {
                data = await userService.swipeLeftService({swipedUsername: username})
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
}