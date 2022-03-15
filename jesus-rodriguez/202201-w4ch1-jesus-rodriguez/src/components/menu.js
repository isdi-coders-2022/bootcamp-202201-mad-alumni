export function Nav({ menu = ['Dashboard', 'Home'] }) {
    return (
        <>
            <ul className="nav">
                {menu.map((item) => {
                    return <li className="nav__item">{item}</li>;
                })}
            </ul>
        </>
    );
}
