import classNames from 'classnames';

import styles from './HubInfo.module.css';

interface HubInfoProps {
  text: string;
  type?: 'location' | 'plasticAmount';
}
export const HubInfo = ({ text, type }: HubInfoProps) => {
  return (
    <p
      className={classNames(styles.text, {
        [styles.locationText]: type === 'location',
        [styles.plasticAmountText]: type === 'plasticAmount',
      })}
    >
      {text}
    </p>
  );
};
