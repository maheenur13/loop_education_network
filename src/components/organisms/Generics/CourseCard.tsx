import { Badge, Button } from "@components/atoms";
import { FC } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

type PropsType = {
    data: {
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
    }
};

export const CourseCard: FC<PropsType> = ({ data }) => {
    return (
        <CardWrapper className='p-4'>
            <Card.Img src={data?.courseData?.courseImage} variant='top' height={170} width={100} />
            <Card.Body>
                <Card.Title className='text-light Title mt-3'>{data?.courseData?.courseName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card&rsquo;s content.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <Button className='text-dark py-1 ExploreButton'>EXPLORE</Button>
                    </div>
                    <div>
                        <Badge variant='danger' className='PriceBadge' pill>{data?.courseData?.coursePrice} TK</Badge>
                    </div>
                </div>
            </Card.Footer>
        </CardWrapper>
    );
};

const CardWrapper = styled(Card)`
    /* max-width: 300px; */
    .Title {
        font-size: 0.875rem;
        font-weight: 700;
        min-height: 2.2rem;
    }
    .ExploreButton{
        font-size: 0.725rem;
    }
    .PriceBadge {
        font-size: 0.725rem;
    }
`;
