import React from 'react';
import { videos } from '~/assets/videos';
import VideoItem from '~/components/VideoItem';

function Home() {
    return (
        <div>
            <VideoItem videoSrc={videos.errorVideo} />
            <VideoItem
                videoSrc={
                    'https://v16-webapp.tiktok.com/b60ab3abfd0a0d385f58fb7744f774b1/62975a6b/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/c61e9a19a3a44b4ba7cb0369629bf6ce/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1894&bt=947&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZsGHvwe2NWehml7Gb&mime_type=video_mp4&qs=0&rc=ZWc7Nzg6Njs4OTQ6M2VpNkBpM2YzOGg6Zm93OzMzZjgzM0A1LS9jNi9eNV4xX2E2MS5eYSNqZHJmcjRnc2ZgLS1kL2Nzcw%3D%3D&l=20220601062221010244055220110EB6C'
                }
            />
        </div>
    );
}

export default Home;
