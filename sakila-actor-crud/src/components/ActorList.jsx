import React, { useEffect, useState } from 'react';
import { fetchActors, deleteActor } from '../services/api';

const ActorList = () => {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        const getActors = async () => {
            const data = await fetchActors();
            setActors(data);
        };
        getActors();
    }, []);

    const handleDelete = async (id) => {
        await deleteActor(id);
        setActors(actors.filter(actor => actor.id !== id));
    };

    return (
        <div>
            <h2>Actor List</h2>
            <ul>
                {actors.map(actor => (
                    <li key={actor.id}>
                        {actor.name}
                        <button onClick={() => handleDelete(actor.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActorList;