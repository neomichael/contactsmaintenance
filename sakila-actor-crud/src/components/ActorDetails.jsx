import React from 'react';

const ActorDetails = ({ actor }) => {
    if (!actor) {
        return <div>Select an actor to see the details.</div>;
    }

    return (
        <div className="actor-details">
            <h2>{actor.first_name} {actor.last_name}</h2>
            <p><strong>Biography:</strong> {actor.biography || 'No biography available.'}</p>
            <p><strong>Filmography:</strong></p>
            <ul>
                {actor.filmography && actor.filmography.length > 0 ? (
                    actor.filmography.map((film, index) => (
                        <li key={index}>{film.title}</li>
                    ))
                ) : (
                    <li>No films available.</li>
                )}
            </ul>
        </div>
    );
};

export default ActorDetails;