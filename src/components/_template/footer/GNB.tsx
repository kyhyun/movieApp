import styles from './gnb.module.scss';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHeart } from '@fortawesome/free-solid-svg-icons';

const LINKS = [
  {
    icon: <FontAwesomeIcon icon={faHouse} />,
    to: 'search',
  },
  { icon: <FontAwesomeIcon icon={faHeart} />, to: 'favorite' },
];

const GNB = () => {
  return (
    <footer className={styles.wrap}>
      <ul className={styles.content}>
        {LINKS.map((value) => (
          <li key={value.to}>
            <NavLink to={value.to} className={({ isActive }) => (isActive ? styles.active : '')}>
              {value.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default GNB;
