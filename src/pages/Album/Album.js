import classNames from 'classnames/bind';
import styles from './Album.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AlbumLeft from './AlbumLeft';
import AlbumRight from './AlbumRight';
import { useContext } from 'react';
import { ThemeContext } from '../../layouts/defaultLayout/DefaultLayout';

const cx = classNames.bind(styles);

function Album() {
    const { detailPlaylist = {} } = useContext(ThemeContext);
    const { encodeId, title, contentLastUpdate, artists, song = {}, thumbnailM, like, description } = detailPlaylist;

    return (
        <div className={cx('wrapper')}>
            <Row className="gx-0 my-4 h-100">
                <Col sm={4} className="px-5 overflow-hidden">
                    <AlbumLeft
                        like={like}
                        title={title}
                        timeStamp={contentLastUpdate}
                        artists={artists}
                        img={thumbnailM}
                    />
                </Col>
                <Col sm={8} className=" h-100 overflow-hidden">
                    <AlbumRight decs={description} songs={song.items} code={encodeId} />
                </Col>
            </Row>
        </div>
    );
}

export default Album;
