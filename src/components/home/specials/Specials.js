import Dish from './Dish';
import Salad from '../../../assets/img/home/greek_salad.jpg';
import Bruchetta from '../../../assets/img/home/bruchetta.png';
import Dessert from '../../../assets/img/home/lemon_dessert.jpg';

const Specials = () => {
    const dishes = [
        {
            id: 1,
            key: 12345,
            name: 'Greek salad',
            price: '$12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            image: Salad
        },
        {
            id: 2,
            key: 67890,
            name: 'Bruchetta',
            price: '$5.99',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            image: Bruchetta
        },
        {
            id: 3,
            key: 98123,
            name: 'Lemon Dessert',
            price: '$5.00',
            description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
            image: Dessert
        }
    ];

    return (
        <>
            <section id="week-specials">
                <div className="title">
                    <h2>This weeks specials!</h2>
                    <a href="/online-menu" role="button" className="button-primary">Online Menu</a>
                </div>
                <div className="specials">
                    {dishes.map((dish,index) => {
                        return (
                            <Dish id={dish.id} key={(dish.name + '-' + index).replace(/\s+/g, '').toLowerCase()} dishName={dish.name} dishPrice={dish.price} dishDescription={dish.description} dishImage={dish.image}/>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default Specials;