import classNames from 'classnames/bind';
import styles from './Album.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AlbumLeft from './AlbumLeft';
import AlbumRight from './AlbumRight';

const cx = classNames.bind(styles);

function Album() {
    return (
        <div className={cx('wrapper')}>
            <Row className="gx-5 my-4 h-100">
                <Col sm={3} className="h-100">
                    <AlbumLeft />
                </Col>
                <Col sm={9} className=" h-100">
                    <AlbumRight />
                </Col>
            </Row>
        </div>
    );
}

export default Album;
