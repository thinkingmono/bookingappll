import ImgTopLeft from '../../assets/img/reservations/salmon.jpg';
import ImgTopRight from '../../assets/img/reservations/wine.jpg';
import ImgBottomLeft from '../../assets/img/reservations/salad.jpg';
import ImgBottomRight from '../../assets/img/home/bruchetta.png';

const CallToAction = () => {
    return (
        <>
            <section id="weekly-specials">
                <div className="container">
                    <div className="banner-images">
                        <div className="row">
                            <div className="image"><img src={ImgTopLeft} alt="Salmon" /></div>
                            <div className="image"><img src={ImgTopRight} alt="Wine" /></div>
                        </div>
                        <div className="row">
                            <div className="image"><img src={ImgBottomLeft} alt="Salad" /></div>
                            <div className="image"><img src={ImgBottomRight} alt="Bruchetta" /></div>
                        </div>
                    </div>
                    <div className="banner-call-to-action">
                        <h2>Weekly Specials</h2>
                        <h3>Chef's recommendation</h3>
                        <p>This week enjoy our Grilled Fish with fine spices and a glass of wine. Come and spend a wonderful evening with your love ones.</p>
                        <a href="/specials" role="button" className="button-primary">See the specials</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CallToAction;