import styles from './Image.module.css';

interface ImageProps {
  imageSource: string;
  altText: string;
  type: 'logo' | 'main';
}

export const Image = ({ imageSource, altText, type }: ImageProps) => {
  return (
    <img
      className={type === 'main' ? styles.mainImage : styles.hubLogo}
      src={imageSource}
      loading='lazy'
      alt={altText}
    />
  );
};
