import { nanoid } from 'nanoid';
import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ imageUrl, largeImageUrl, onClick }) => {
  return (
    <li className={css.imageGalleryItem} id={nanoid()}>
      <img
        src={imageUrl}
        alt=""
        data-large={largeImageUrl}
        className={css.imageGalleryItemImage}
        onClick={onClick}

        style={{ cursor: 'pointer' }}
      />
    </li>
  );
};

