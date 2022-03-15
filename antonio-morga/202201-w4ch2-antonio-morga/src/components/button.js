export const Button = ({
    action,
    deleteGentleman,
    updateGentleman,
    gentleman,
}) => {
    const handleDelete = () => {
        deleteGentleman(gentleman);
    };

    const handleSelect = () => {
        const newGentleman = { ...gentleman, selected: !gentleman.selected };
        updateGentleman(newGentleman);
    };

    switch (action) {
        case 'delete':
            return (
                <i
                    onClick={handleDelete}
                    className="icon gentleman__icon gentleman__icon--delete fas fa-times"
                ></i>
            );

        case 'select':
            return (
                <i
                    onClick={handleSelect}
                    className="icon gentleman__icon fas fa-check"
                ></i>
            );

        default:
    }
};
