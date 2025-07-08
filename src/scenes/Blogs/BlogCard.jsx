import s from '../Projects/ProjectCard/ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BlogCard = ({ id, image, title, description }) => {
  const location = useLocation();

  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <Link
          to={`/Blog/${id}`}
          state={{ background: location }}
        >
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            style={{ minHeight: '10rem' }}
            placeholderSrc={image.placeholderSrc}
          />
        </Link>

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
        </div>
      </div>
    </li>
  );
};

export default BlogCard;
