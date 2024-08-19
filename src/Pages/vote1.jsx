import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import ProgressBar from '../components/ProgressBar/ProgressBar.jsx';
import VoteTile from '../components/VoteTile/VoteTile.jsx';
import React, { useState } from 'react';
import {partyList} from '../App.js'

export function Vote1() {
    let [selectedTile, setSelectedTile] = useState(-1);
    const handleClick = (index) => {setSelectedTile(selectedTile = index)};

    return (
        <div className="App">
            <ProgressBar activeSteps={4} />
            <div className='grid-container'>
                {partyList.map((item, index) => (
                    <VoteTile
                        key={index}
                        party={item.party}
                        name={item.name}
                        onClick = {() => {handleClick(index)}}
                        type={1}
                        selectedKey = {index}
                        selectedTile = {selectedTile}
                    />
                ))}
                <p>{selectedTile}</p>
            </div>
            <Link to="/vote2">
                <Button text="Continuă" />
            </Link>
        </div>
    );
}