import messiHero from '../../img/messi-world-cup.jpeg';

function HomePage() {
    return (
        <div>
            <div className="unit-copy-wrapper">
                <h2 className="headline">Messi Apparel</h2>
                <h3 className="sub-headline">World champion</h3>
                <div className="cta-link">
                    <a href="/">Shop now</a>
                    <div>icon</div>
                </div>
            </div>
            <div className="unit-image-wrapper">
                <figure className="unit-image">
                    <img src={messiHero} alt="messi holding world cup"/>
                </figure>
            </div>
        </div>
    );
};

export default HomePage;