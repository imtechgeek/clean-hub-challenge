import styles from './HubState.module.css';

import { State } from '../../utils/types';

interface HubStateProps {
  state: State;
}
export const HubState = ({ state }: HubStateProps) => {
  return <span className={state === State.Active ? styles.active : styles.demo}>{state}</span>;
};
