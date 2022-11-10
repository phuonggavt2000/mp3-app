import { BsSearch } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { MdOutlineShowChart } from 'react-icons/md';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div
            className={cx('wrapper', {
                active: true,
            })}
        >
            <div className={cx('wrapper-search')}>
                <div className={cx('wrapper-search_icon')}>
                    <BsSearch />
                </div>
                <input
                    type="text"
                    className={cx('wrapper-search_input')}
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                />
                <div className={cx('wrapper-search_icon')}>
                    <MdClear />
                </div>
            </div>
            <div className={cx('search')}>
                <Nav className={cx('result')}>
                    <span className={cx('result_heading')}>Đề xuất cho bạn</span>
                    <Nav.Link as={Link} className={cx('result-item')}>
                        <MdOutlineShowChart />
                        <span className={cx('result_title')}> Người nhu anh</span>
                    </Nav.Link>
                    <Nav.Link as={Link} className={cx('result-item')}>
                        <MdOutlineShowChart />
                        <span className={cx('result_title')}> Người nhu anh</span>
                    </Nav.Link>
                    <Nav.Link as={Link} className={cx('result-item')}>
                        <MdOutlineShowChart />
                        <span className={cx('result_title')}> Người nhu anh</span>
                    </Nav.Link>
                    <span className={cx('result_heading')}>Đề xuất cho bạn</span>
                    <Nav.Link as={Link} className={cx('result-item')}>
                        <MdOutlineShowChart />
                        <span className={cx('result_title')}> Người nhu anh</span>
                    </Nav.Link>
                    <Nav.Link as={Link} className={cx('result-item')}>
                        <MdOutlineShowChart />
                        <span className={cx('result_title')}> Người nhu anh</span>
                    </Nav.Link>
                    <Nav.Link as={Link} className={cx('result-item')}>
                        <MdOutlineShowChart />
                        <span className={cx('result_title')}> Người nhu anh</span>
                    </Nav.Link>
                    <span className={cx('result_heading')}>Đề xuất cho bạn</span>
                    <Nav.Link as={Link} className={cx('result-item')}>
                        <MdOutlineShowChart />
                        <span className={cx('result_title')}> Người nhu anh</span>
                    </Nav.Link>
                    <Nav.Link as={Link} className={cx('result-item')}>
                        <MdOutlineShowChart />
                        <span className={cx('result_title')}> Người nhu anh</span>
                    </Nav.Link>
                    <Nav.Link as={Link} className={cx('result-item')}>
                        <MdOutlineShowChart />
                        <span className={cx('result_title')}> Người nhu anh</span>
                    </Nav.Link>
                </Nav>
            </div>
        </div>
    );
}

export default Search;
