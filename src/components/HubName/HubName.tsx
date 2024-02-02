import styles from './HubName.module.css';

import { Image } from '../Image/Image';

interface HubNameProps {
  name: string;
  logoImageSource: string | undefined;
}
export const HubName = ({ name, logoImageSource }: HubNameProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.name}>{name}</h3>
      {logoImageSource && <Image imageSource={logoImageSource} type='logo' altText='Hub Logo' />}
    </div>
  );
};
