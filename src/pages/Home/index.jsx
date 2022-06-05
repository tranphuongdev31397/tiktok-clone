import React from 'react';
import { videos } from '~/assets/videos';
import VideoItem from '~/components/VideoItem';

function Home() {
    return (
        <div>
            <VideoItem videoSrc={videos.errorVideo} />
            <VideoItem
                videoSrc={
                    'https://v16-webapp.tiktok.com/aee6b589b7cce46f92bda68ed4b288ef/629b0ffd/video/tos/useast2a/tos-useast2a-pve-0037-aiso/3f10ca5bd9fb49f6b72e8a68c142abd1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3492&bt=1746&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8Zp9fkwe2NJiz2l7Gb&mime_type=video_mp4&qs=0&rc=NGg4ZDc8aTg0ZDk8ZTllN0BpajM2bWc6ZjN1OzMzZjgzM0BeLTM2Mi40XzAxLzUyNjAzYSNhcjNlcjRfb29gLS1kL2Nzcw%3D%3D&l=2022060401550501024406903510066B32'
                }
            />
        </div>
    );
}

export default Home;
