import "../Styles/product.css";
import "../Styles/main.css";

export default function Product() {
    return (
        <>
        <div className="product-container">
            <div className="crafted">
                <h3>Crafted with excellent material.</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <button>Explore</button>
            </div>
            <div className="product">
                <img src='product-one.jpg' alt='chair' />
                <div className="image-title">
                    <h4>House Chair</h4>
                    <p>$50.00</p>
                </div>
            </div>
            <div className="product">
                <img src='product-two.jpg' alt='chair' />
                <div className="image-title">
                    <h4>Kinzo Auro Chair</h4>
                    <p>$78.00</p>
                    <span class="material-symbols-outlined display">add</span>
                </div>
            </div>
            <div className="product">
                <img src='product-three.jpg' alt='chair' />
                <div className="image-title">
                    <h4>Ergonomic Chair</h4>
                    <p>$43.00</p>
                </div>
            </div>
        </div>
        </>
    );
}