import React, {useState} from 'react';

const FavoriteButton= ({activityId, UserId}) =>{
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);

        fetch('/api/favorite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ UserId, activityId}),
        });
    };

    return (
        <button onClick={toggleFavorite}>
            {isFavorited ? 'Unfavorite' : 'Favorite'}
        </button>
    );
};
export default FavoriteButton;