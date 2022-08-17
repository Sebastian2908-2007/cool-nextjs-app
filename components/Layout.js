// import my Nav component
import Nav from './Nav';
import Header from './Header';
import styles from '../styles/Layout.module.css';

// this will wrap around all all of our pages in _app.js so we pass props 
//in this case destructuring and calling it children
const Layout = ({children}) => {
    return(
        <>
        <Nav/>
<div className={styles.container}>
<main className={styles.main}>
<Header/>
    {children}
</main>
</div>
       </>
    );
};

export default Layout;