import styles from './NoResults.module.css';

interface NoResultsProps {
  text: string;
}

export const NoResults = ({ text }: NoResultsProps) => {
  return <p className={styles.text}>{text}</p>;
};
