import styles from './HubListItem.module.css';

import { Image } from '../Image/Image';
import { HubName } from '../HubName/HubName';
import { HubInfo } from '../HubInfo/HubInfo';
import { HubState } from '../HubState/HubState';
import { State } from '../../utils/types';
import { isPartOfPortfolio } from '../../utils/checkPortfolio';
import { PlasticProgress } from '../PlasticProgress/PlasticProgress';

interface HubListItemProps {
  name: string;
  description: string;
  imageSource: string;
  logoImageSource: string | undefined;
  location: string | null;
  totalRecoveredPlasticFormatted: string;
  totalRecoveredPlastic: number;
  totalUnassignedPlastic: number;
  slug: string;
  state: State;
  parentHub: string | null;
}
export const HubListItem = ({
  name,
  description,
  imageSource,
  logoImageSource,
  location,
  totalRecoveredPlastic,
  totalUnassignedPlastic,
  totalRecoveredPlasticFormatted,
  slug,
  state,
  parentHub,
}: HubListItemProps) => {
  const totalPlastic = totalRecoveredPlastic + totalUnassignedPlastic;
  const recoveredPlasticText = `Recovered Plastic: ${totalRecoveredPlasticFormatted.toLocaleLowerCase()} Kg`;
  const unassignedPlasticText = `Unassigned Plastic: ${totalUnassignedPlastic.toFixed(2).toLocaleString()} Kg`;

  return (
    <a
      className={styles.hubCard}
      href={`${process.env.REACT_APP_DETAILS_PAGE_URL}/${slug}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image altText={name} imageSource={imageSource} type='main' />
      <HubName logoImageSource={logoImageSource} name={name} />
      <HubInfo text={description} />
      {isPartOfPortfolio(parentHub) && (
        <span className={styles.portfolioText}>Portfolio&apos;s Hub</span>
      )}

      <div className={styles.progressWrapper}>
        <PlasticProgress
          displayText={recoveredPlasticText}
          totalPlastic={totalPlastic}
          recoveredOrUnassignedPlastic={totalRecoveredPlastic}
        />
        <PlasticProgress
          displayText={unassignedPlasticText}
          totalPlastic={totalPlastic}
          recoveredOrUnassignedPlastic={totalUnassignedPlastic}
        />
      </div>

      {location && <HubInfo type='location' text={location} />}
      <HubState state={state} />
    </a>
  );
};
