
const Testimonial = (props) => {
    let userName = props.userName;
    let userAvatar = props.userAvatar;
    let userComment = props.userComment;
    let userRating = props.userRating;

    return (
        <>
            <div className="testimonial">
                <div className="testimonial-info" >
                    <div className="rating-image-name">
                        <div className="rating">
                            <img src={userRating} alt="User Rating" />
                        </div>
                        <div className="image"><img src={userAvatar} alt="" /></div>
                        <div className="name"><p>{userName}</p></div>
                    </div>
                    <div className="comment">
                        <p>{userComment}</p>
                    </div>
                </div>
                {/* <div className="image-comment">
                </div>*/}
            </div>
        </>
    );
};

export default Testimonial;