import { ReactComponent as GitHubLogo } from '../../svgs/GitHub.svg';
import { ReactComponent as FacebookLogo } from '../../svgs/Facebook.svg';
import { ReactComponent as TwitterLogo } from '../../svgs/Twitter.svg';
import { ReactComponent as InstagramLogo } from '../../svgs/Instagram.svg';
import imgURL from '../../img/support.jpg';
import './SupportPage.css';
import Footer from '../Footer/Footer';

function SupportPage() {
    return (
        <div className='support-page'>
            <div className='support-page-wrapper'>
                <div className='support-image-container'>
                    <img className='support-image' src={imgURL} alt="support"/>
                </div>
                <div className='support-message'>
                    <p>Please let us know how we can help</p>
                </div>
                <div className="contacts">
                    <p className="contacts-title">Contact us</p>
                    <div className='support-contacts'>
                        <div><TwitterLogo width="3rem" height="3rem"/></div>
                        <div><GitHubLogo width="3rem" height="3rem"/></div>
                        <div><FacebookLogo width="3rem" height="3rem"/></div>
                        <div><InstagramLogo width="3rem" height="3rem"/></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SupportPage;