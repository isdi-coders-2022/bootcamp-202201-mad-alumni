import * as service from '../../services/apiRequest';
import { actionTypes } from './action-types';

export const loadRobots = () => (dispatch) => {
    service.getAllRobots().then((resp) => {
        dispatch({ type: actionTypes.load, payload: resp.data });
    });
};

export const deleteRobot = (id) => (dispatch) => {
    service.deleteRobot(id).then((resp) => {
        if (resp.status === 200) {
            dispatch({ type: actionTypes.remove, payload: id });
        }
    });
};

export const updateRobot = (id, partialRobot) => (dispatch) => {
    service.updateRobot(id, partialRobot).then((resp) => {
        dispatch({ type: actionTypes.update, payload: resp.data });
    });
};

export const addRobot = (newRobot) => (dispatch) => {
    const newRobotPayload = {
        name: newRobot.name,
        image: newRobot.image,
        characteristics: {
            speed: newRobot.speed,
            resistance: newRobot.resistance,
        },
    };
    service.addRobot(newRobotPayload).then((resp) => {
        dispatch({ type: actionTypes.add, payload: resp.data });
    });
};
