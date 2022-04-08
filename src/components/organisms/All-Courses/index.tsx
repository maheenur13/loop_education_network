import { courseData } from '@utils/constants';
import { FC } from 'react';
import { CourseCard } from '../Generics';

export const AllCoursesPage: FC = () => {
    return (
        <div>
            <h1 className='text-center mt-4 mb-3'>All courses</h1>
            <CourseCard courseData={courseData} />
        </div>
    );
};
