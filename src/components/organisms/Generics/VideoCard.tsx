/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, VideoPlayer } from "@components/atoms"
import { FC } from "react"
import { Card } from "react-bootstrap"

export const VideoCard: FC<any> = ({ data }) => {
    return (
        <Card bg="dark" style={{ width: '100%', margin: '16px 0' }}>

            <Card.Body>
                <Card.Title className="text-primary">
                    Tesla’s mission is to accelerate the world’s transition to sustainable energy.
                </Card.Title>
                <VideoPlayer videoUrl={data?.articleDetails?.video} />
                <Link href="#">View Details</Link>
            </Card.Body>
        </Card>
    )
}
