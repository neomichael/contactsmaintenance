import React, { useState, useEffect } from 'react';
import { createActor, updateActor } from '../services/api';

const ActorForm = ({ actor, onSave }) => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    useEffect(() => {
        if (actor) {
            setName(actor.name);
            setBio(actor.bio);
        }
    }, [actor]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const actorData = { name, bio };
        if (actor) {
            updateActor(actor.id, actorData).then(onSave);
        } else {
            createActor(actorData).then(onSave);
        }
        setName('');
        setBio('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Biography:</label>
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{actor ? 'Update' : 'Create'} Actor</button>
        </form>
    );
};

export default ActorForm;