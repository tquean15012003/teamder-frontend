import { BaseService } from "./BaseService";

export class CourseService extends BaseService {
    getAllCoursesService = () => {
        return this.get('courses/getcourses');
    }
    
}

export const courseService = new CourseService()