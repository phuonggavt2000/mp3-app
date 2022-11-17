import { AiOutlineLeft } from 'react-icons/ai';
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={cx('prev')}>
            <div className={className} onClick={onClick}>
                <AiOutlineLeft />
            </div>
        </div>
    );
}

export default PrevArrow;
