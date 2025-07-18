import s from '../Projects/ModalProjectCard/ModalProjectCard.module.scss';
import Blogs from '../../data/Blogs';
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/UIElements/Button/Button';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useModal } from '../../hooks/modalHook';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ModalBlogCard = () => {
  const { id } = useParams();
  const { image, title, links, technologies } = Blogs.find(
    (p) => id === p.id,
  );
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <div className={s.cardWrapper}>
        <LazyLoadImage
          alt="project-img"
          src={image.src}
          effect="blur"
          width="100%"
          wrapperClassName={s.image}
        />

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>

          
        </div>

        <div className={s.cardFooter}>
          {!!links.site && (
            <Button
              style={{ width: '12rem' }}
              className="primary"
              href={links.site}
              target="_blank"
            >
              <BiLinkExternal /> &nbsp; View Blogs
            </Button>
          )}

          {!!links.repo && (
            <Button
              style={{ width: '12rem' }}
              className="primary"
              href={links.repo}
              target="_blank"
            >
              <BiLinkExternal /> &nbsp; Know more
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalBlogCard;
