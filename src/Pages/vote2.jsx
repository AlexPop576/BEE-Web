import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import ProgressBar from '../components/ProgressBar/ProgressBar.jsx';
import SignatureBox from '../components/SignatureBox/SignatureBox.jsx';
import VoteTile from '../components/VoteTile/VoteTile.jsx'
import { partyList } from '../App.js'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Vote2() {
    let [selectedTile, setSelectedTile] = React.useState(0);
    let [cnp, setCnp] = React.useState(0);

    useEffect(() => {
        const storedTile = localStorage.getItem('selectedTile');
        if (storedTile !== null) {
            setSelectedTile(parseInt(storedTile, 10)); // Ensure it's a number
        }
        const storedCNP = localStorage.getItem('cnp');
        if (storedCNP !== null) {
            setCnp(parseInt(storedCNP, 10))
        }
    }, []);

    let sendVote = async (selectedTile, partyList, cnp) => {
        let voteName = partyList[selectedTile].name;
        let voteParty = partyList[selectedTile].party;

        console.log(`sent ${voteName}`);

        try {
            const data = { voteName, voteParty, cnp };
            const response = await axios.post('http://localhost:5000/receive-data', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log('Response from server:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };


    return (
        <div className="App">
            <ProgressBar activeSteps={5} />
            {cnp}
            <VoteTile
                party={partyList[selectedTile].party}
                name={partyList[selectedTile].name}
                type={2} />
            <p className="instructions" id="vote2">Confirmă votul prin semnătură</p>
            <SignatureBox />
            <Link to="/final">
                <Button text="Continuă" onClick={() => { sendVote(selectedTile, partyList, cnp) }} />
            </Link>
        </div>
    );
}