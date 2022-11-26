import styles from './Album.module.scss';
import classNames from 'classnames/bind';

import { Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../../layouts/defaultLayout/DefaultLayout';
import Music from './Music';

const cx = classNames.bind(styles);

function AlbumRight() {
    const { loading, playing } = useContext(ThemeContext);

    return (
        <div className={cx('album_right')}>
            <div>
                <span className="text-secondary fs-6 me-2">Lựa lời</span>
                <span>The hệ gen 2 bùng nổ với các nhóm nhjac 2n1</span>
            </div>

            <div className="text-secondary fs-7 fw-semibold border-secondary my-3">
                <Row className="g-0 ">
                    <Col sm={12} className="border-color-album p-2">
                        <Row>
                            <Col sm={6}>
                                <span>Bài hát</span>
                            </Col>
                            <Col sm={4}> Album</Col>
                            <Col sm={2}>Thời gian</Col>
                        </Row>
                    </Col>

                    <Music loading={loading} playing={playing} />
                    <Music loading={loading} playing={playing} />
                </Row>
            </div>
        </div>
    );
}

export default AlbumRight;
