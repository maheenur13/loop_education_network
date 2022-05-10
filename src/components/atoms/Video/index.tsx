import { FC, Fragment } from "react";

export const VideoPlayer: FC<PropsType> = ({ videoUrl }) => {
    return (
        <Fragment>
            <iframe
                title="video"
                width="100%"
                height="400px"
                style={{ border: 'none', borderRadius: '1.25rem' }}
                src={`https://www.youtube.com/embed/${videoUrl.split('=', 2)[1]}?autoplay=0&mute=1&rel=0`}
            ></iframe>
        </Fragment>
    )
}

type PropsType = {
    videoUrl: string;
}
