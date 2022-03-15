export default function DisplayInfo({ robot }) {
    return (
        <div className="robot__bottom-container">
            <div className="robot__info-container">
                <p className="robot__field-name">Name:</p>
                <p className="robot__field-value">{robot.name}</p>
            </div>
            <div className="robot__characteristics-container">
                <p className="robot__info-title">Characteristics</p>
                <div className="robot__info-container">
                    <p className="robot__field-name">Speed:</p>
                    <p className="robot__field-value">
                        {robot.characteristics.speed}
                    </p>
                </div>
                <div className="robot__info-container">
                    <p className="robot__field-name">Resistance:</p>
                    <p className="robot__field-value">
                        {robot.characteristics.resistance}
                    </p>
                </div>
                <div className="robot__info-container">
                    <p className="robot__field-name">Created at:</p>
                    <p className="robot__field-value">
                        {robot.characteristics.created_at}
                    </p>
                </div>
            </div>
        </div>
    );
}
