import heroImg from './assets/img/home/restauranfood.jpg';

function Main() {
  return (
    <>
      <main>
        {/* Hero */}
        <section id="hero-banner">
          <div className="container">
            <div className="hero-call-to-action">
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
              <p>We are a family owned
                Mediterranean restaurant,
                focused on traditional
                recipes served with a modern
                twist</p>
              <a href="/reservations" role="button" className="button-primary">Reserve a table</a>
            </div>
            <div className="hero-image">
              <img src={heroImg} alt="Dish example" width="375" height="400" />
            </div>
          </div>
        </section>
        {/* Weeks Specials */}
        <section id="week-specials">
          <div className="title">
            <h2>This weeks specials!</h2>
            <a href="/online-menu" role="button" className="button-primary">Online Menu</a>
          </div>
          <div className="specials">
            <article>
              <div className="dish-img first"></div>
              <div className='dish-information'>
                <div className="dishname-price">
                  <h4>Greek salad</h4>
                  <span>$12.99</span>
                </div>
                <div className="dish-description">
                  <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className="dish-delivery">
                  <span>Order a delivery</span>
                  <i></i>
                </div>
              </div>
            </article>
            <article>
              <div className="dish-img second"></div>
              <div className='dish-information'>
                <div className='dishname-price'>
                  <h4>Bruchetta</h4>
                  <span>$5.99</span>
                </div>
                <div className="dish-description">
                  <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                </div>
                <div className="dish-delivery">
                  <span>Order a delivery</span>
                  <i></i>
                </div>
              </div>
            </article>
            <article>
              <div className="dish-img third"></div>
              <div className='dish-information'>
                <div className='dishname-price'>
                  <h4>Lemon Dessert</h4>
                  <span>$5.00</span>
                </div>
                <div className="dish-description">
                  <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </div>
                <div className="dish-delivery">
                  <span>Order a delivery</span>
                  <i></i>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* About */}
        <section id="about">
          <div className="container">
            <div className="banner-call-to-action">
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis pellentesque.</p>
              <a href="/booking" role="button" className="button-primary">Reserve a table</a>
            </div>
            <div className="banner-images">
              <div className="image back"></div>
              <div className="image front"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;