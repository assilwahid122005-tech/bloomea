function Footer() {
    return (
        <footer className="bg-light mt-5 pt-5 pb-4">

            <div className="container">

                <div className="row g-4">

                    {/* Brand */}
                    <div className="col-12 col-md-4 ">
                        <h3 className="bloomea-color fw-bold ">
                            Bloomea
                        </h3>
                        <p className="mt-3">
                            Thoughtful gifts, beautifully boxed.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-6 col-md-4">
                        <h5 className="fw-bold">
                            Quick Links
                        </h5>

                        <div className="d-flex flex-column gap-2 mt-3">
                            <a href="/" className="text-dark text-decoration-none">
                                Home
                            </a>

                            <a href="/boxes" className="text-dark text-decoration-none">
                                Our Boxes
                            </a>

                            <a href="/contact" className="text-dark text-decoration-none">
                                Contact
                            </a>


                        </div>
                    </div>

                    {/* Contact */}
                    <div className="col-6 col-md-4">
                        <h5 className="fw-bold">
                            Contact Us
                        </h5>

                        <p>
                            📞 +961 76 755 485
                        </p>
                    </div>

                </div>

                <hr className="my-4" />

                <div className="text-center">
                    <p className="mb-0 text-secondary">
                        © 2026 Bloomea. All rights reserved.
                    </p>
                </div>

            </div>

        </footer>
    );
}

export default Footer;