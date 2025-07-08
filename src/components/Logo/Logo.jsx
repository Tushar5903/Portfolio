import { Link } from 'react-router-dom';
import { routes } from '../../routes/RootRoutes';
import s from './Logo.module.scss';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.Home} aria-label="site logo">
          <span className={s.logoText}>Tushar</span>
        
      </Link>
    </div>
  );
};

export default Logo;
