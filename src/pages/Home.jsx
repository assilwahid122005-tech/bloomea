import './Design.css'
import { useNavigate } from "react-router-dom";
function Home() {

    const navigate = useNavigate();//t2akad 3amle import ,kermal e3mal navigate men page la page 
    return (
        <div className="container py-5 text-center">
            <div className="hero">
                <h3 className="pink fw-bold display-5">Thoughtful Gifts, Beautifully Boxed. </h3>
                <p className="lead mt-3">Discover beautifully curated boxes filled with little things that make every moment special.</p>

                <button className="btn mt-3 px-2 py-2 rounded-5 btn-outline-dark"
                    onClick={() => navigate("/boxes")}>EXPLORE OUR BOXES</button>
            </div>
            <div className="m-5">
                <h2 className="fw-bold">Made for Moments That Matter</h2>

                <p className="lead my-5">
                    At Bloomea, we create beautiful gift boxes filled with
                    carefully selected little things. Whether you're celebrating,
                    thanking someone, or simply making someone smile, we have
                    something special for every moment.
                </p>

                <div>
                    <p className="lead pink my-5">Pick your favorite things and create a box that’s made for you</p>
                </div>

                <div className="row g-3 ">
                    <div className="col-12 col-md-6 col-lg-3 ">
                        <div className="card text-center rounded-5 shadow-sm h-100 ">
                            <h4 className="card-title fw-bold mt-3 dgreen">Birthday Boxes 🎂</h4>
                            <div className="card-body">
                                <p>
                                    Make birthdays special with thoughtful gifts, sweet treats, and a personal message.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 ">
                        <div className="card text-center rounded-5 shadow-sm h-100">
                            <h4 className="card-title fw-bold mt-3 dgreen">Sweet Treats 🍫</h4>
                            <div className="card-body">
                                <p>  Create a delicious box filled with chocolates, candies, and favorite sweet treats. </p>

                            </div>
                        </div>
                    </div>

                    {/*second card */}
                    <div className="col-12 col-md-6 col-lg-3 ">
                        <div className="card text-center rounded-5 shadow-sm h-100">
                            <h4 className="card-title fw-bold mt-3 dgreen">Self-Care Boxes 🧴</h4>
                            <div className="card-body">
                                <p>
                                    Create a relaxing box with candles, skincare, cozy items, and little treats.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 ">
                        <div className="card text-center rounded-5 shadow-sm h-100">
                            <h4 className="card-title fw-bold mt-3 dgreen">Graduation Boxes 🎓</h4>
                            <div className="card-body">
                                <p>
                                    Celebrate their achievement with personalized gifts, flowers, treats, and more.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 ">
                        <div className="card text-center rounded-5 shadow-sm h-100">
                            <h4 className="card-title fw-bold mt-3 dgreen">Couple Boxes 💕</h4>
                            <div className="card-body">
                                <p>
                                    Celebrate love with thoughtful gifts, sweet treats, and special items to enjoy together.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-lg-3 ">
                        <div className="card text-center rounded-5 shadow-sm h-100">
                            <h4 className="card-title fw-bold mt-3 dgreen">Bestie Box 🎀</h4>
                            <div className="card-body">
                                <p>
                                    Surprise your best friend with favorite treats, cute gifts, and thoughtful little things.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 ">
                        <div className="card text-center rounded-5 shadow-sm h-100">
                            <h4 className="card-title fw-bold mt-3 dgreen"> Book Lover's Box 📚</h4>
                            <div className="card-body">
                                <p>
                                    Create a cozy box with books, reading essentials, sweet treats, and relaxing favorites.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 ">
                        <div className="card text-center rounded-5 shadow-sm h-100">
                            <h4 className="card-title fw-bold mt-3 dgreen">Celebration Boxes 🎉</h4>
                            <div className="card-body">
                                <p>
                                    Make every special moment memorable with a collection of thoughtful gifts and surprises.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <p className="lead mt-3">Some Of The Boxes:</p>

                <div className="row g-4">

                    <div className="col-12 col-md-6 col-lg-4 mt-3">
                        <div className="card h-100 rounded-5">
                            <img src="/images/pinkbox.png"
                                alt="loading..."
                                className="img-fluid rounded-5"
                                style={{ height: "300px", objectFit: "cover" }}
                            />

                            <h4 className="fw-bold mt-3">
                                Pink Sweet Box 🎀
                            </h4>
                            <p className="description mt-3">A soft and sweet gift filled with pretty touches, perfect for making someone feel special. 🎀</p>
                            

                        </div>

                    </div>



                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 rounded-5">
                            <img src="/images/box2.png"
                                alt="loading..."
                                className="img-fluid rounded-5"
                                style={{ height: "300px", objectFit: "cover" }}
                            />
                            <h4 className="fw-bold mt-3">Cozy Moments Box 🕯️</h4>
                            <p className="description mt-3">A cozy gift made for peaceful moments, relaxation, and a little time for yourself. 🕯️</p>
                          

                        </div>

                    </div>


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 rounded-5">
                            <img src="/images/box3.png"
                                alt="loading..."
                                className="img-fluid rounded-5"
                                style={{ height: "300px", objectFit: "cover" }}
                            />
                            <h4 className="fw-bold mt-3">Special Surprise Box 💕</h4>
                            <p className="description mt-3">A cozy gift made for peaceful moments, relaxation, and a little time for yourself. 🕯️</p>
                           

                        </div>

                    </div>

                </div>
                <br />
                <br />
                <h1 className=" fw-bold mt-5 pink">WHY CHOOSE BLOOMEA ?</h1>
                <p className="text-secondary ">  Beautifully prepared gifts, thoughtfully customized and made at affordable prices.</p>

                <h4 className=" fw-bold mt-5 my-3">Thoughtfully Selected 🎁</h4>
                <p> Every item is carefully selected to make your gift feel special.</p>

                <h4 className=" fw-bold mt-5 my-3">Customized 🎀</h4>
                <p> Our boxes are thoughtfully prepared to suit different people and occasions.</p>

                <h4 className=" fw-bold mt-5 my-3">Affordable Prices 💕</h4>
                <p class="mb-5"> Beautiful gifts at comfortable prices for every special moment.</p>

                <br />
                <br />

                <h1 className="fw-bold mt-5 pink">How It Works?</h1>
                <p className="text-secondary">
                    Finding the perfect gift is simple.
                </p>

                <h4 className="fw-bold mt-5 my-3">1. Tell Us Your Budget 🎁</h4>
                <p>
                    Let us know your budget and the occasion you're shopping for.
                </p>

                <h4 className="fw-bold mt-5 my-3">2. Tell Us What You Like 💕</h4>
                <p>
                    Tell us about your favorite things, colors, or gift ideas.
                </p>

                <h4 className="fw-bold mt-5 my-3">3. We Create Your Box 🎀</h4>
                <p>
                    We carefully choose and arrange the gifts to create a beautiful box just for you.
                </p>

                <h4 className="fw-bold mt-5 my-3">4. Enjoy the Moment 🛍️</h4>
                <p className="mb-5">
                    Receive your beautiful box and make someone feel special.
                </p>

                <br />
                <h4 className="mt-5">Ready to Find Something Special? 💕</h4>
                <button class="btn btn-outline-dark p-2 rounded-5 mt-3"
                    onClick={() => navigate("/boxes")}>EXPLORE OUR BOXES</button>

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
    );
}

export default Home;