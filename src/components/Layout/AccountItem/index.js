import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2588f9ec8e9409025feb26b24165aee0.jpeg?lk3s=a5d48078&nonce=63451&refresh_token=b5a51b7ebd58c3af2ce304cac29df2b4&x-expires=1721998800&x-signature=FqjmC%2FWMSoT%2F3%2BLrm2Kog6uxvVQ%3D&shp=a5d48078&shcp=81f88b70"
                alt="MaiAnh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>

                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
