import FiveStar from '../../../assets/img/home/five_star_rating.png';
import FourStar from '../../../assets/img/home/four_star_rating.png';
import ThreeStar from '../../../assets/img/home/three_star_rating.png';
import AvatarWomanOne from '../../../assets/img/home/avatar_woman_one.jpg';
import AvatarWomanTwo from '../../../assets/img/home/avatar_woman_two.jpg';
import AvatarManOne from '../../../assets/img/home/avatar_man_one.jpg';
import AvatarManTwo from '../../../assets/img/home/avatar_man_two.jpg';
import Testimonial from '../testimonials/Testimonial';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Thalia',
            comment: 'Magna fringilla urna porttitor rhoncus dolor.',
            rating: FourStar,
            avatar: AvatarWomanOne
        },
        {
            id: 2,
            name: 'Sebastian',
            comment: 'Magna fringilla urna porttitor rhoncus dolor.',
            rating: FiveStar,
            avatar: AvatarManOne
        },
        {
            id: 3,
            name: 'Nicolas',
            comment: 'Magna fringilla urna porttitor rhoncus dolor.',
            rating: ThreeStar,
            avatar: AvatarManTwo
        },
        {
            id: 4,
            name: 'Amara',
            comment: 'Magna fringilla urna porttitor rhoncus dolor.',
            rating: FiveStar,
            avatar: AvatarWomanTwo
        }
    ]
    return (
        <>
            <section id="testimonials">
                <h2>Testimonials</h2>
                <div className="container" >
                    {testimonials.map( (testimonial) => {
                        return <Testimonial key={testimonial.id} userName={testimonial.name} userAvatar={testimonial.avatar} userComment={testimonial.comment} userRating={testimonial.rating}/>
                    } )}
                </div>
            </section>
        </>
    );
}

export default Testimonials;