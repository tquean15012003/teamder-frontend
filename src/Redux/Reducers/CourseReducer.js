import { SET_ALL_COURSES } from "../Constants/CourseContants";

const stateDefault = {
    courses: []
};

export const CourseReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_ALL_COURSES: {
            return { ...state, courses: action.courses };
        }
        default: return { ...state };
    };
};