import React, { useState } from 'react';
import './dayNight.css';

const Day = () => {
    // Declare a new state variable, which we'll call "count"
    const [isDay, setDay] = useState(true);

    const day = () => setDay(!isDay)

    return (
        <div className={`innerWrapper${isDay ? " dayTime" : " nightTime"}`}>
            <p>{isDay ? "Es ist Tag! ☀️" : "Es ist Nacht 🌑"}</p>
            <button onClick={day}>Wechsel zu {isDay ? "Nacht" : "Tag"}</button>
        </div>
    );
}

export default Day