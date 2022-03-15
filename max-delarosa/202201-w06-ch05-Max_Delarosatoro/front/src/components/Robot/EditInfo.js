/* eslint-disable jsx-a11y/label-has-associated-control */
export default function EditInfo({ formValue, handleFormChange, robot }) {
    return (
        <form className="robot__bottom-container">
            <div className="robot__info-container">
                <label htmlFor="name" className="robot__field-name">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    className="robot__field-value"
                    value={formValue.name}
                    onChange={handleFormChange}
                />
            </div>
            <div className="robot__characteristics-container">
                <p className="robot__info-title">Characteristics</p>
                <div className="robot__info-container">
                    <label htmlFor="speed" className="robot__field-name">
                        Speed:
                    </label>
                    <input
                        type="text"
                        className="robot__field-value"
                        value={formValue.speed}
                        readOnly
                    />
                    <input
                        type="range"
                        id="speed"
                        max="10"
                        min="1"
                        value={formValue.speed}
                        onChange={handleFormChange}
                        name=""
                    />
                </div>
                <div className="robot__info-container">
                    <label htmlFor="resistance" className="robot__field-name">
                        Resistance:
                    </label>
                    <input
                        type="text"
                        className="robot__field-value"
                        value={formValue.resistance}
                        readOnly
                    />
                    <input
                        type="range"
                        max="10"
                        min="1"
                        value={formValue.resistance}
                        onChange={handleFormChange}
                        name=""
                        id="resistance"
                    />
                </div>
                <div className="robot__info-container">
                    <div className="robot__info-container">
                        <p className="robot__field-name">Created at:</p>
                        <p className="robot__field-value">
                            {robot.characteristics.created_at}
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}
