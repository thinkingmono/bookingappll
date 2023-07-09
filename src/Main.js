import heroImg from './assets/img/home/restauranfood.jpg';
import greekSaladImg from './assets/img/home/greek salad.jpg';
import bruchettaImg from './assets/img/home/bruchetta.png';
import lemonDessertImg from './assets/img/home/lemon dessert.jpg';

function Main() {
  return (
    <>
      {/* Hero */}
      <section>
        <div>
          <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned
              Mediterranean restaurant,
              focused on traditional
              recipes served with a modern
              twist</p>
            <a href="/booking" role="button">Reserve a table</a>
          </div>
          <div>
            <img src={heroImg} alt="Dish example" width="375" height="400" />
          </div>
        </div>
      </section>
      {/* Weeks Specials */}
      <section>
        <div>
          <h2>This weeks specials!</h2>
          <a href="/online-menu" role="button">Online Menu</a>
        </div>
        <div>
          <article>
            <img src={greekSaladImg} alt="Greek Salad" width="300" />
            <div>
              <h4>Greek salad</h4>
              <span>$12.99</span>
            </div>
            <div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            </div>
            <div>
              <span>Order a delivery</span>
              <i></i>
            </div>
          </article>
        </div>
        <div>
          <article>
            <img src={bruchettaImg} alt="Bruchetta" width="300" />
            <div>
              <h4>Bruchetta</h4>
              <span>$5.99</span>
            </div>
            <div>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            </div>
            <div>
              <span>Order a delivery</span>
              <i></i>
            </div>
          </article>
        </div>
        <div>
          <article>
            <img src={lemonDessertImg} alt="Lemon dessert" width="300" />
            <div>
              <h4>Lemon Dessert</h4>
              <span>$5.00</span>
            </div>
            <div>
              <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            </div>
            <div>
              <span>Order a delivery</span>
              <i></i>
            </div>
          </article>
        </div>
      </section>
      {/* About */}
      <section>
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis pellentesque.</p>
          <a href="/booking" role="button">Reserve a table</a>
        </div>
        <div>
          <img src={heroImg} alt="About" width="375" height="400" />
          <img src={heroImg} alt="About" width="375" height="400" />
        </div>
      </section>
      {/* <main>
      </main> */}
    </>
  );
}

export default Main;