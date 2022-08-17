import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return(
        <div>
<h1 className={headerStyles.title}>
    <a target='blank' href='https://www.britannica.com/animal/dog'  rel="noopener noreferrer">Dog</a> Academy!
    <p className={headerStyles.description}>Learn all the best methods for training your dog and join our fantastic community today!</p>
</h1>

</div>
    );
};

export default Header;