import { courseService } from "../../Services/CourseService"
import { SET_ALL_COURSES } from "../Constants/CourseContants"

export const getAllCoursesAction = () => {
    return async (dispatch, getState) => {
        try {
            const data = await courseService.getAllCoursesService()
            dispatch({
                type: SET_ALL_COURSES,
                courses: data.data.all_courses
            })
        } catch (error) {
            console.log(error)
        }
    }
}