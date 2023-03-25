import { authService } from "../../Services/AuthService"
import { SUCCESSFULLY_CREATED, TOKEN } from "../../Settings/Settings"

export const logInAction = (logInInfo, navigate) => {
    return async (dispatch, getState) => {
        try {
            const data = await authService.logInService(logInInfo)
            if (data.status === SUCCESSFULLY_CREATED) {
                localStorage.setItem(TOKEN, data.data.accessToken)
                navigate('/selectmodule', { replace: false })
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
}

export const signUpAction = (signUpInfo, navigate) => {
    return async (dispatch, getState) => {
        try {
            const data = await authService.signUpService(signUpInfo)
            if (data.status === SUCCESSFULLY_CREATED) {
                alert(data.data.message)
                navigate('/login', { replace: false })
            }
        } catch (error) {
            console.log(error)
        }
    }
}