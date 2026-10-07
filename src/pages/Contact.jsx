function Contact() {
    return (
        <div className="container text-center py-5">
            <p className="pink display-4 fw-bold">  Get In Touch 💕</p>

            <p className="lead text-secondary">
                Have a question or want to order a gift box?
                We'd love to hear from you.
            </p>

            <div className="row m-5 g-5">
                <div className="col-12 col-md-4 col-lg-4 ">

                    <h2 className="fw-bold">📞 Phone </h2>
                    <p>+961 76 755 485</p>

                </div>

                <div className="col-12 col-md-4 col-lg-4">
                    <h2 className="fw-bold">📷 Instagram </h2>
                    <a
                        href="https://www.instagram.com/giftbox_bloomea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" btn btn-light text-dark text-decoration-none "
                    >
                        @giftbox-bloomea
                    </a>

                </div>


                <div className="col-12 col-md-4 col-lg-4">
                    <h2 className="fw-bold">📘 Facebook </h2>
                    <a
                        href="https://www.facebook.com/BloomeaGifts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light text-dark text-decoration-none"
                    >
                        Bloomea
                    </a>

                </div>

                <a
                    href="https://wa.me/96176755485?text=Hello%2C%20I%20would%20like%20to%20order%20the%20Pink%20Sweet%20Box."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none mt-5"
                >
                    <span className="text-success fw-bold">
                        Order on WhatsApp
                    </span>
                </a>



            </div>
        </div>
    );
}

export default Contact;