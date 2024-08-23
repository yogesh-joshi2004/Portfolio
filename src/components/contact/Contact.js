import './contact.css';

const Contact = () => {
    return (


        <div
            id="contact"
            className="contact-box"
        >
            <div className="contact-box-1">
                <div className="contact-box-10">
                    <h1 className="contanct-h1">Contact Me</h1>
                    <p className="contact-pera">
                        Kindly submit the form below so that I can reach out to you.
                    </p>
                </div>
                <form className="contact-form">
                    <div>
                        <input

                            type="text"
                            placeholder="Enter Your Full Name"
                            className="contact-name contact-same"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="contact-email contact-same"
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder=""
                            className="contact-message contact-same"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="contact-submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Contact;