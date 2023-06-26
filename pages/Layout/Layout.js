import webAppBg from '../../public/webAppBg.jpeg';
import Image from 'next/image'
import classes from './Layout.module.css';
import Header from '../Header/Header';

const Layout = (props) => {
    return (
        <div>
            
            <div className={classes.bg}>
                <Image src={webAppBg} alt="Hyundai Image" fill={true} className={classes['bg-img']}/>
            </div>
            <Header/>
            Your App goes here...
        </div>
    )
}

export default Layout