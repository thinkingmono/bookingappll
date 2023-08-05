import ImgUp from '../../assets/img/reservations/restaurant.jpg';

const ConfirmedBooking = () => {
    return (
        <>
            <section id="confirmation-page">
                <div className="container">
                    {/* Confirmation */}
                    <div className="confirmation-msg-col" >
                        <div className="confirmation-msg">
                            <h2>Your reservation was send successfully!</h2>
                            <p>Thanks for share your data with us. Please consider the following items:</p>
                            <ul>
                                <li>Check your email to verify your reservation details and some useful recommendations.</li>
                                <li>Please arrive 10 minutes earlier to Little Lemon Restaurant to process your reservation.</li>
                                <li>If you have any doubt, write to reservations@littlelemon.com, one of our agents will get in touch with you to answer your questions.</li>
                            </ul>
                            <a href="/reservations" role="button" className='button-primary' aria-label="Make another reservation">Make another reservation</a>
                        </div>
                    </div>
                    <div className="images">
                        <div className="img up"><img src={ImgUp} alt="Little Lemon Restaurant" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ConfirmedBooking;