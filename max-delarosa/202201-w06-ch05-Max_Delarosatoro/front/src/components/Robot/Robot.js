/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { AiFillDelete, AiFillEdit, AiFillSave } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/robots/action-creators';
import DisplayInfo from './DisplayInfo';
import EditInfo from './EditInfo';

export default function Robot({ robot }) {
    const [editMode, setEditMode] = useState(false);
    const [formValue, setFormValue] = useState({
        name: robot.name,
        speed: robot.characteristics.speed,
        resistance: robot.characteristics.resistance,
        createdAt: robot.characteristics.created_at,
    });
    const dispatch = useDispatch();

    const handleFormChange = (e) => {
        setFormValue({ ...formValue, [e.target.id]: e.target.value });
    };

    const handleClick = () => {
        dispatch(actions.deleteRobot(robot._id));
    };

    const handleSave = () => {
        dispatch(actions.updateRobot(robot._id, formValue));
        toggleEditMode();
    };

    const toggleEditMode = () => {
        setEditMode((state) => !state);
    };

    return (
        <div key={robot.id} className="robot">
            {editMode ? (
                <AiFillSave
                    onClick={handleSave}
                    className="robot__icon robot__icon--edit"
                    data-testid="save-btn"
                />
            ) : (
                <AiFillEdit
                    onClick={toggleEditMode}
                    className="robot__icon robot__icon--edit"
                    data-testid="edit-btn"
                />
            )}
            <AiFillDelete
                onClick={handleClick}
                className="robot__icon robot__icon--delete"
                data-testid="delete-btn"
            />
            <div className="robot__photo-container">
                <img
                    src={robot.image}
                    alt={robot.name}
                    className="robot__img"
                />
            </div>
            {editMode ? (
                <EditInfo
                    handleFormChange={handleFormChange}
                    formValue={formValue}
                    robot={robot}
                />
            ) : (
                <DisplayInfo robot={robot} />
            )}
        </div>
    );
}
