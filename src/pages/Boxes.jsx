import './Design.css'
function Boxes() {


    return (
        <div className="container text-center mt-5 ">
            <h1 className="pink m-3">Some of the Boxes We’ve Made🎁</h1>

            <p className="lead m-3">
                Explore our collection of gift boxes, thoughtfully created to suit different budgets. Choose the budget that works for you !!!
            </p>

            <div className="row g-3 mt-5 mb-5">
                <div className="col-12 col-md-6 col-lg-4 mt-5">
                    <div className="card rounded-5 shadow-sm">
                        <img src="/images/pinkbox.png"
                            alt="loading..."
                            className="img-fluid rounded-5"
                            style={{ height: "400px", objectFit: "cover" }} />

                        <h4 className="fw-bold mt-3">
                            Pink Sweet Box 🎀
                        </h4>
                        <p className="description mt-3">A soft and sweet gift filled with pretty touches, perfect for making someone feel special. 🎀</p>
                    </div>

                </div>
                <div className="col-12 col-md-6 col-lg-4 mt-5">
                    <div className="card rounded-5 shadow-sm">
                        <img src="/images/box2.png"
                            alt="loading..."
                            className="img-fluid rounded-5"
                            style={{ height: "400px", objectFit: "cover" }} />
                        <h4 className="fw-bold mt-3">Cozy Moments Box 🕯️</h4>
                        <p className="description mt-3">A cozy gift made for peaceful moments, relaxation, and a little time for yourself. 🕯️</p>
                    </div>

                </div>

                <div className="col-12 col-md-6 col-lg-4 mt-5">
                    <div className="card rounded-5 shadow-sm">
                        <img src="/images/box3.png"
                            alt="loading..."
                            className="img-fluid rounded-5"
                            style={{ height: "400px", objectFit: "cover" }} />
                        <h4 className="fw-bold mt-3">Special Surprise Box 💕</h4>
                        <p className="description mt-3">A cozy gift made for peaceful moments, relaxation, and a little time for yourself. 🕯️</p>
                    </div>

                </div>

                <div className="col-12 col-md-6 col-lg-4 mt-5">
                    <div className="card rounded-5 shadow-sm">
                        <img src="/images/box4i.png"
                            alt="loading..."
                            className="img-fluid rounded-5"
                            style={{ height: "400px", objectFit: "cover" }} />
                        <h4 className="fw-bold mt-3">💜 Purple Everyday Box</h4>
                        <p className="description mt-3">A sweet and practical gift box filled with cozy and useful little essentials, perfect for adding a touch of joy to everyday moments.</p>
                    </div>

                </div>

                <div className="col-12 col-md-6 col-lg-4 mt-5">
                    <div className="card rounded-5 shadow-sm">
                        <img src="/images/box5i.png"
                            alt="loading..."
                            className="img-fluid rounded-5"
                            style={{ height: "400px", objectFit: "cover" }} />
                        <h4 className="fw-bold mt-3">🌸 Soft Moments Box</h4>
                        <p className="description mt-3">A soft and cozy gift box filled with comforting little touches, perfect for relaxing, unwinding, and enjoying peaceful moments.</p>
                    </div>

                </div>
            </div>
            <a
                href="https://wa.me/96176755485?text=Hello%2C%20I%20would%20like%20to%20order%20the%20Pink%20Sweet%20Box."
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none "
            >
                <span className="text-success fw-bold ">
                    Order on WhatsApp
                </span>
            </a>
        </div>
    );
}

export default Boxes;