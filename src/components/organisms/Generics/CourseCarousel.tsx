import { FC } from 'react';
import { CardGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { CourseCard } from './CourseCard';

export type ICourseType = {
    courseData: {
        courseCategory: string;
        courseID: string;
        courseName: string;
        courseData: {
            courseName: string;
            courseImage: string;
            courseDescription: string;
            courseRatings: number;
            coursePrice: number;
        };
    }[]
};

export const CourseCarousel: FC<ICourseType> = (props) => {
    const { courseData } = props;
    return (
        <Wrapper>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                slidesPerView={1}
                spaceBetween={15}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
            >
                <CardGroup>
                    {
                        courseData?.map((data, i) => {
                            return (
                                <SwiperSlide key={i} >
                                    <CourseCard data={data} />
                                </SwiperSlide>
                            )
                        })
                    }
                </CardGroup>

            </Swiper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
/* max-width: 650px; */
.card {
    background-color:var(--bs-dark);
}
    /* background-color:var(--bs-dark); */
`;