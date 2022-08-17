// with next we do not use <a> for page to page routing instead we use:
import Link from 'next/link';
import navigationStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={navigationStyles.nav}>
          <ul>
            <li>
               <Link href='/'>Home</Link>
            </li>
            <li>
               <Link href='/training'>Training</Link>
            </li>
          </ul>
        </nav>
    );
};

export default Nav;