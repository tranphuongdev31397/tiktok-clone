import React, { memo, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faVolumeUp, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import videoFuncs from './function';

const cx = classNames.bind(styles);

function Video({ className, videoClass, actionClass, placementVolBar = 'top', ...props }) {
    //Action State
    const [action, setAction] = useState({
        isPlay: true,
        isVolume: false,
    });
    //State
    const [volumeBar, setVolumeBar] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [duration, setDuration] = useState({
        minutes: 0,
        seconds: 0,
    });
    const [timeVideo, setTimeVideo] = useState(0);
    const [progressVideo, setProgressVideo] = useState(0);

    //Ref
    const videoRef = useRef();
    const timeRef = useRef();
    const volumeRef = useRef();
    //classNameCustom
    const classes = cx('wrapper', {
        [className]: className,
    });
    //ClassName props video
    const videoClasses = cx('video', {
        [videoClass]: videoClass,
    });
    //Action class custom
    const actionClasses = {
        play: cx('btn', 'btn-play', {
            [actionClass?.play]: actionClass?.play,
        }),
        volume: {
            placementVolumeBar: cx('slider-area', {
                [placementVolBar]: placementVolBar,
            }),
        },
        report: cx('report'),
    };

    //All function local component
    //Play button
    const handleTogglePlay = () => {
        if (action.isPlay) {
            setAction((prev) => ({
                ...prev,
                isPlay: !prev.isPlay,
            }));
            videoRef.current.pause();
        } else {
            setAction((prev) => ({
                ...prev,
                isPlay: !prev.isPlay,
            }));
            videoRef.current.play();
        }
    };
    //Volume
    const handleToggleMuted = () => {
        if (action.isVolume) {
            volumeRef.current.value = 0;
            videoRef.current.volume = 0;
            setAction((prev) => ({
                ...prev,
                isVolume: !prev.isVolume,
            }));
        } else {
            volumeRef.current.value = 0.5;
            videoRef.current.volume = 0.5;
            setAction((prev) => ({
                ...prev,
                isVolume: !prev.isVolume,
            }));
        }
    };
    const updateVolumeBar = () => {
        setVolumeBar(`${videoRef.current.volume * 100}% `);
    };
    const handleChangeVolume = (e) => {
        videoRef.current.volume = e.target.value;
        if (videoRef.current.volume === 0) {
            setAction((prev) => ({
                ...prev,
                isVolume: false,
            }));
        } else {
            setAction((prev) => ({
                ...prev,
                isVolume: true,
            }));
        }
    };
    //Time
    const handleInitialVideo = () => {
        const time = videoFuncs.formatTime(videoRef.current.duration);
        const milliSecond = Math.round(videoRef.current.duration);
        setTimeVideo(milliSecond);
        setDuration({
            minutes: time.minutes,
            seconds: time.seconds,
        });
    };
    const handleUpdateTime = () => {
        const time = videoFuncs.formatTime(videoRef.current.currentTime);
        const milliSecond = Math.round(videoRef.current.currentTime);
        setProgressVideo(milliSecond);
        timeRef.current.value = milliSecond;
        setTimeElapsed({
            minutes: time.minutes,
            seconds: time.seconds,
        });
        if (videoRef.current.currentTime === duration) {
            timeRef.current.value = 0;
        }
    };
    const updateTimeBar = (e) => {
        videoRef.current.currentTime = e.target.value;
        setProgressVideo(e.target.value);
    };
    useEffect(() => {
        videoFuncs.autoPlayVideo(videoRef.current);
    }, []);
    return (
        <div className={classes}>
            <video
                onTimeUpdate={handleUpdateTime}
                onLoadedMetadata={handleInitialVideo}
                onVolumeChange={updateVolumeBar}
                ref={videoRef}
                className={videoClasses}
                {...props}
            ></video>

            <div className={actionClasses.report}>
                <FontAwesomeIcon icon={faFlag} /> <span> Report</span>
            </div>
            <button className={actionClasses.play} onClick={handleTogglePlay}>
                <FontAwesomeIcon icon={action.isPlay ? faPause : faPlay} />
            </button>
            <div className={cx('volume')}>
                <div className={cx('volume-area')}>
                    <FontAwesomeIcon
                        className={cx('volume-icon')}
                        icon={action.isVolume ? faVolumeUp : faVolumeXmark}
                        onClick={handleToggleMuted}
                    />
                    <div className={actionClasses.volume.placementVolumeBar}>
                        <div className={cx('slider-box')}>
                            <input
                                name="volumeBar"
                                ref={volumeRef}
                                className={cx('slider')}
                                defaultValue={0}
                                type={'range'}
                                max={1}
                                min={0}
                                step="0.01"
                                onChange={handleChangeVolume}
                            />
                            <div style={{ width: volumeBar }} className={cx('progress')}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('time__area')}>
                <div className={cx('video__progress')}>
                    <progress className={cx('progress__bar')} value={progressVideo} min="0" max={timeVideo}></progress>
                    <input
                        className={cx('seek')}
                        ref={timeRef}
                        defaultValue={0}
                        type={'range'}
                        min={0}
                        max={timeVideo}
                        step="1"
                        onChange={updateTimeBar}
                    />
                </div>
                <div className={cx('time')}>
                    <time className={cx('time__elapsed')}>
                        {timeElapsed.minutes}:{timeElapsed.seconds}
                    </time>
                    <span>/</span>
                    <time className={cx('time__duration')}>
                        {duration.minutes}:{duration.seconds}
                    </time>
                </div>
            </div>
        </div>
    );
}

export default memo(Video);
