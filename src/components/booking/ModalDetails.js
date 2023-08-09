const ModalDetails = (props) => {
    return (
        <>
            <div id="modal-details">
                <div className="overlay"></div>
                <div className="container">
                    <h2>Are you sure?</h2>
                    <p>Please confirm the details before you send your reservation.</p>
                    {props.formData ? (
                        <ul>
                            <li><b>Date: </b>{props.formData.inputDate}</li>
                            <li><b>Time: </b>{props.formData.selectTime}</li>
                            <li><b>Guest: </b>{props.formData.inputGuest}</li>
                            <li><b>Occasion: </b>{props.formData.selectOccasion}</li>
                            <li><b>Seating: </b>{props.formData.radioSeating}</li>
                            <li><b>Name: </b>{props.formData.inputName}</li>
                            <li><b>Email: </b>{props.formData.inputEmail}</li>
                            <li><b>Phone: </b>{props.formData.inputPhone}</li>
                        </ul>
                    ) : null}
                    <div className="button-group">
                        <button className="button-success" onClick={() => {
                            props.setSubmit(true);
                            props.setShowModal(false);
                        }
                        }>Confirm</button>
                        <button className="button-cancel" onClick={() => {
                            props.setSubmit(false);
                            props.setShowModal(false);
                        }}>Modify</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDetails;