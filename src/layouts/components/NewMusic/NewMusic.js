/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import styles from './NewMusic.module.scss';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icons from '../../../utils/Icons';
import Music from '../../../components/Music/Music';
import { Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../../defaultLayout/DefaultLayout';
import moment from 'moment';
import 'moment/locale/vi';

const cx = classNames.bind(styles);

function NewMusic() {
    const data = useContext(ThemeContext);
    const [music, setMusic] = useState(null);

    useEffect(() => {
        setMusic(data.newMusic.items);
    }, [data.newMusic.items]);

    const controls = [
        {
            id: 1,
            title: 'TẤT CẢ',
        },
        {
            id: 2,
            title: 'Việt Nam',
        },
        {
            id: 3,
            title: 'Quốc tế',
        },
    ];

    const [active, setActive] = useState(0);

    const updateActive = (id) => {
        setActive(id);
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Mới Phát Hành</span>
            <div className={cx('control')}>
                {controls.map((value, index) => (
                    <div
                        className={cx('musicType', {
                            active: value.id === active,
                        })}
                        onClick={() => {
                            updateActive(value.id);
                        }}
                        key={index}
                    >
                        <span className={cx('musicType_title')}>{value.title}</span>
                    </div>
                ))}

                <Link to={'/'} className={cx('all')}>
                    <span className={cx('all_title')}>TẤT CẢ</span>
                    {<icons.AiOutlineRight />}
                </Link>
            </div>
            {music && (
                <div className={cx('musics')}>
                    <Row className="g-2">
                        {music.all.map((value, index) => (
                            <Col key={index} xs={6} lg={4}>
                                <Music
                                    name={value.title}
                                    adult={value.artistsNames}
                                    img={value.thumbnail}
                                    time={moment.unix(value.releaseDate).fromNow()}
                                    active
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
}

export default NewMusic;
