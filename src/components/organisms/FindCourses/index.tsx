import { courseData } from '@utils/constants';
import { FC } from 'react';
import { CourseCarousel } from '../Generics';

export const FindCourses: FC = () => {
    return (
        <div>
            <h1 className='text-center mt-4 mb-3'>All courses</h1>
            <CourseCarousel courseData={courseData} />
        </div>
    );
};
