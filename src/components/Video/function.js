const videoFuncs = {
    autoPlayVideo: (video) => {
        video.play();
        video.volume = 0;
    },
    formatTime: (timeInSeconds) => {
        if (isNaN(timeInSeconds)) return;
        Math.round(timeInSeconds);
        const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

        return {
            minutes: result.substr(3, 2),
            seconds: result.substr(6, 2),
        };
    },
};

export default videoFuncs;
