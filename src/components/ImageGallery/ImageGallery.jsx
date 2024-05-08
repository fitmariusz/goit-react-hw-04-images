import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import css from './ImageGallery.module.css'

export const ImageGallery = ({images, onClick}) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={nanoid()}
          imageUrl={image.webformatURL}
          largeImageUrl={image.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};