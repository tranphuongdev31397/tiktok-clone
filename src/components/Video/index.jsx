import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faVolumeUp, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Video({ className, videoClass, actionClass, ...props }) {
    //classNameCustom
    const classes = cx('wrapper', {
        [className]: className,
    });
    //ClassName props video
    const videoClasses = cx('video', {
        [videoClass]: videoClass,
    });

    const actionClasses = {
        play: cx('btn', 'btn-play', {
            [actionClass?.play]: actionClass?.play,
        }),
    };
    const videoRef = useRef();
    const volumeRef = useRef();
    const [action, setAction] = useState({
        isPlay: true,
        isVolume: false,
    });
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
    if (videoRef) {
        if (videoRef?.current?.muted) {
            videoRef.current.muted = false;
        }
    }

    return (
        <div className={classes}>
            <video ref={videoRef} className={videoClasses} loop {...props}></video>
            <button className={actionClasses.play} onClick={handleTogglePlay}>
                <FontAwesomeIcon icon={action.isPlay ? faPause : faPlay} />
            </button>
            <div className={cx('volume')}>
                <div className={cx('volume-area')}>
                    <FontAwesomeIcon
                        icon={action.isVolume ? faVolumeUp : faVolumeXmark}
                        className={cx('volume-icon')}
                        onClick={handleToggleMuted}
                    />

                    <div className={cx('slider-area')}>
                        <input
                            ref={volumeRef}
                            className={cx('slider')}
                            defaultValue={0}
                            type={'range'}
                            max={1}
                            min={0}
                            step="0.01"
                            onChange={handleChangeVolume}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
