import Logo from '@/components/Logo/Logo';
import NavLink from '@/components/NavLink/NavLink';
import Icon from '@/components/Icon/Icon';
import styles from './HeaderContent.module.css';

import headerData from '../../../data/header.json';
const { socials } = headerData;

const HeaderContent = ({ buttonClasses, logoClasses }) => {
  return (
    <div className={styles.headerContentContainer}>
      <Logo className={logoClasses} />
      <ul className={styles.menu}>
        <li key={0} className={styles.menuItem}>
          <NavLink buttonAsLink className={buttonClasses}>
            Menu
          </NavLink>
        </li>
        {socials.map(({ iconName, href }, idx) => (
          <li key={idx + 1} className={styles.menuItem}>
            <NavLink href={href} className={buttonClasses}>
              <Icon iconName={iconName} width={16} height={16} className={styles.socialIcon} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderContent;
