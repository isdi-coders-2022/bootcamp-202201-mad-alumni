import './Button.scss';

export default function Button({ id, submit, children, handler }) {
    return (
        <button
            onClick={handler}
            id={id}
            className="button"
            type={submit ? 'submit' : 'button'}
        >
            {children}
        </button>
    );
}
