import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                render={renderPreview}
                appendTo={document.body}
                placement="bottom"
                offset={[-20, 0]}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/1e8fbb1a32c113562e037e0835d2f64e.jpeg?lk3s=a5d48078&nonce=91805&refresh_token=6a4c52098541b43fcbbde13c3da35bc1&x-expires=1722690000&x-signature=RCQsClGOTp5HCrpD2Ik11laiz6U%3D&shp=a5d48078&shcp=81f88b70"
                        alt="hoaxu"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('user-name')}>
                            <strong>hoamnx</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('nickname')}>hoa xù</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
