import { Button } from '@components/atoms';
import { FC } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

type PropsType = {
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

export const CourseCard: FC<PropsType> = (props) => {
    const { courseData } = props;
    return (
        <Wrapper>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                <CardGroup>
                    {
                        courseData?.map((courseData, i) => {
                            return (
                                <SwiperSlide key={i} >
                                    <Card className='p-4'>
                                        <Card.Img src={courseData?.courseData?.courseImage} variant='top' height={220} />
                                        <Card.Body>
                                            <Card.Title className='text-light'>{courseData?.courseData?.courseName}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card&rsquo;s content.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button className='text-dark'>EXPLORE</Button>
                                        </Card.Footer>
                                    </Card>
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
.card {
    background-color:var(--bs-dark);
}
    /* background-color:var(--bs-dark); */
`;