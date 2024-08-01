import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './AccountPreview.module.scss';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/1e8fbb1a32c113562e037e0835d2f64e.jpeg?lk3s=a5d48078&nonce=91805&refresh_token=6a4c52098541b43fcbbde13c3da35bc1&x-expires=1722690000&x-signature=RCQsClGOTp5HCrpD2Ik11laiz6U%3D&shp=a5d48078&shcp=81f88b70"
                    alt="hoaxu"
                />
                <Button className={cx('follow')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('user-name')}>
                    <strong>hoamnx</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('nickname')}>hoa xù</p>
            </div>
            <p className={cx('interactions')}>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
