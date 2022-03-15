/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import { Link } from 'react-router-dom';
import * as actions from '../../redux/robots/action-creators';
import Robot from '../Robot/Robot';

export function Home() {
    const dispatch = useDispatch();
    const robots = useSelector((state) => state);
    useEffect(() => {
        dispatch(actions.loadRobots());
    }, [dispatch]);

    return (
        <main className="main">
            <Link className="main__link" to="/add-robot">
                Add Robot
            </Link>
            <section className="robots">
                {robots.map((item) => (
                    <Robot key={item._id} robot={item} />
                ))}
            </section>
        </main>
    );
}
