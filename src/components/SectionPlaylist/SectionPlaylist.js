import classNames from 'classnames/bind';
import styles from './Album.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../Image/Image';
import images from '../../assest/images/images';
import icons from '../../utils/Icons';

const cx = classNames.bind(styles);

function SectionPlaylist() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('playlist')}>
                <span className="fs-4 fw-bold mb-3 d-block">Chờ chiu</span>

                <Row className="gx-4">
                    <Col>
                        <div className="d-flex flex-column">
                            <div className={cx('wrapper_img')}>
                                <img alt="error" src={images.namcu} className={cx('img')} />
                                <div className={cx('control')}>
                                    {<icons.AiOutlineHeart className="fs-3" />}
                                    {<icons.BsPlayCircle className="mx-4 fs-1" />}
                                    {<icons.FiMoreHorizontal className="fs-3" />}
                                </div>
                            </div>
                            <span className="fw-bold">Nhạc cho thứ tư</span>
                            <span className={cx('desc')}>
                                Chờ=iu=chiu ngày thứ tư vơi những track indie Việt chọn lọcdfsafds
                            </span>
                        </div>
                    </Col>
                    <Col>
                        <div className={cx('item')}>
                            <div className={cx('img')}>
                                <Image src={images.namcu} />
                            </div>
                            <span></span>
                            <span></span>
                        </div>
                    </Col>
                    <Col>
                        <div className={cx('item')}>
                            <div className={cx('img')}>
                                <Image src={images.namcu} />
                            </div>
                            <span></span>
                            <span></span>
                        </div>
                    </Col>

                    <Col>
                        <div className={cx('item')}>
                            <div className={cx('img')}>
                                <Image src={images.namcu} />
                            </div>
                            <span></span>
                            <span></span>
                        </div>
                    </Col>
                    <Col>
                        <div className={cx('item')}>
                            <div className={cx('img')}>
                                <Image src={images.namcu} />
                            </div>
                            <span></span>
                            <span></span>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default SectionPlaylist;
