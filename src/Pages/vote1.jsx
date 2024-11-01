// Vote1.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx';
import AppBar from '../components/AppBar/AppBar.jsx';
import VoteTile from '../components/VoteTile/VoteTile.jsx';
import { partyList } from '../App.js';

export function Vote1() {
    const [selectedTile, setSelectedTile] = React.useState(-1);
    const [isActive, setIsActive] = React.useState(0);

    const handleClick = (index) => {
        setSelectedTile(index);
        localStorage.setItem('selectedTile', index); // Store value in local storage
        setIsActive(1);
    };

    return (
        <div className="App">
            <AppBar index={3} activeSteps = {4}/>
            <p className='instructions'>Selectare candidat</p>
            <div className='grid-container'>
                {partyList.map((item, index) => (
                    <VoteTile
                        key={index}
                        party={item.party}
                        name={item.name}
                        onClick={() => handleClick(index)}
                        type={1}
                        selectedKey={index}
                        selectedTile={selectedTile}
                    />
                ))}
            </div>
            <Button text="Continuă" active={isActive} onClick={setIsActive} page="/vote2"/>
        </div>
    );
}
