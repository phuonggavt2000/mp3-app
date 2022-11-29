import classNames from 'classnames/bind';
import styles from './SectionPlaylist.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icons from '../../utils/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SectionPlaylist({ title, playlist, getPlaylist, id }) {
    return (
        <div className={cx('wrapper')}>
            {playlist && (
                <div className={cx('playlist')}>
                    <span className="fs-4 fw-bold mb-3 d-block">{title}</span>
                    <Row className="gx-4">
                        {playlist.map((value, index) => (
                            <Col key={index}>
                                <div className="d-flex flex-column">
                                    <Link
                                        to={value.link}
                                        className={cx('wrapper_img')}
                                        onClick={() => {
                                            getPlaylist(value.encodeId);
                                        }}
                                    >
                                        <img alt="error" src={value.thumbnailM} className={cx('img')} />
                                        <div className={cx('control')}>
                                            {<icons.AiOutlineHeart className="fs-3" />}
                                            {<icons.BsPlayCircle className="mx-4 fs-1" />}
                                            {<icons.FiMoreHorizontal className="fs-3" />}
                                        </div>
                                    </Link>
                                    <Link className={cx('link')}>{value.title}</Link>
                                    <span className={cx('desc')}>{value.sortDescription}</span>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
}

export default SectionPlaylist;
