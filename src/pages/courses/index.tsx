
import { FindCourses } from "@components/organisms";
import { MainLayout } from "@components/template/Layouts";
import { NextPage } from "next";

const AllCourse: NextPage = () => {
    return (
        <MainLayout>
            <title>All Courses | Loop Education Network</title>
            <FindCourses />
        </MainLayout>
    );
};

export default AllCourse;