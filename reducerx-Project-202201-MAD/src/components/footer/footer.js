import './footer.scss';

export function Footer() {
    return (
        <footer id="footer">
            <img
                src="/assets/cocktailCopa.png"
                alt="Cocktail logo neon cup"
                className="footer-image"
            />
            <a href="#header" className="go-top-item">
                <p>Back to top &#x21e7;</p>
            </a>
            <address className="footer-sign">
                <p>Shaked and mixed by ReducerX with love ❤️</p>
            </address>
        </footer>
    );
}
