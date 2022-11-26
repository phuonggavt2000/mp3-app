import Image from '../../components/Image/Image';
import images from '../../assest/images/images';
import { Link } from 'react-router-dom';
import icons from '../../utils/Icons';
import { Button, Row, Col, Spinner } from 'react-bootstrap';
import styles from './Album.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Music({ loading, playing, active }) {
    return (
        <Col sm={12} className="border-color-album">
            <div
                className={cx('item', {
                    active: active,
                })}
            >
                <Row>
                    <Col sm={6}>
                        <div className="d-flex align-items-center">
                            <div className={cx('img')}>
                                <Image src={images.chung} />
                                <div className={cx('play')}>{<icons.BsPlayFill />}</div>

                                <div className={cx('control')}>
                                    {playing && !loading && <icons.BsFillPauseFill />}
                                    {!playing && !loading && <icons.BsPlayFill />}
                                    {loading && <Spinner animation="border" />}
                                </div>
                            </div>
                            <div className="d-flex flex-column my-2 ms-2">
                                <span className="text-white">Fiction</span>
                                <Link className="text-secondary link-hover-primary">Beast</Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                        {' '}
                        <div className="d-flex h-100 align-items-center">
                            <Link className="text-secondary d-block link-hover-primary">Fiction and fact</Link>
                        </div>
                    </Col>
                    <Col sm={2}>
                        {' '}
                        <div className="d-flex h-100 align-items-center justify-content-start">
                            <span className={cx('time')}>000</span>
                            <div className={cx('plush')}>
                                <Button variant="transparent" className="rounded-pill btn-bd-icon-hover">
                                    <icons.GiMicrophone />
                                </Button>
                                <Button variant="transparent" className="rounded-pill btn-bd-icon-hover">
                                    <icons.AiOutlineHeart />
                                </Button>
                                <Button variant="transparent" className="rounded-pill btn-bd-icon-hover me-5">
                                    <icons.FiMoreHorizontal />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
}

export default Music;
