import { ethers } from 'ethers';
import axios from 'axios';
import { config } from '../config/config';  // Assuming the config file contains the contract details

const provider = new ethers.providers.JsonRpcProvider(config.https_provider);
const signer = new ethers.Wallet(config.minter_private_key, provider);

const contractABI = [
    // Add your contract ABI here, ensure it matches the contract definition
    {"inputs":[{"internalType":"uint256","name":"cnp","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"party","type":"string"}],"name":"setVote","outputs":[],"stateMutability":"nonpayable","type":"function"}
];
let VotingStoreContract = new ethers.Contract(config.contract_address, contractABI, signer);

const sendVote = async (selectedTile, partyList, cnp) => {
    let voteName = partyList[selectedTile].name;
    let voteParty = partyList[selectedTile].party;

    console.log(`Sending ${voteName} to Flask server and blockchain backend.`);

    try {
        // Prepare data
        const data = { voteName, voteParty, cnp };

        // 1. Send to Flask Backend Server
        const serverResponse = await axios.post('http://localhost:5000/receive-data', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('Response from Flask server:', serverResponse.data);

        // 2. Send to Blockchain Backend
        const blockchainResponse = await sendVoteToBlockchain(data);
        console.log('Blockchain transaction response:', blockchainResponse);
    } catch (error) {
        console.error('Error sending data:', error);
    }
};

const sendVoteToBlockchain = async ({ voteName, voteParty, cnp }) => {
    try {
        console.log("Connecting to blockchain and sending transaction...");

        // Calculate gas price
        const gasPrice = await getCurrentGas();

        // Send the transaction to the smart contract
        const txn = await VotingStoreContract.setVote(
            cnp,
            voteName,
            voteParty,
            {
                gasPrice
            }
        );

        console.log('Transaction sent with hash:', txn.hash);
        const receipt = await txn.wait();
        console.log('Transaction confirmed in block:', receipt.blockNumber);

        return { status: true, message: "Transaction successful", hash: txn.hash };
    } catch (error) {
        console.error('Error sending transaction to blockchain:', error);
        return { status: false, message: "Blockchain transaction failed" };
    }
};

async function getCurrentGas() {
    try {
        const feeData = await provider.getFeeData();
        if (feeData.gasPrice !== null) {
            return feeData.gasPrice;
        } else {
            console.warn("Using fallback gas price.");
            return ethers.utils.parseUnits("20", "gwei");  // Default fallback gas price
        }
    } catch (error) {
        console.error('Error getting GAS price. Using fallback!', error);
        return ethers.utils.parseUnits("20", "gwei");  // Default fallback gas price
    }
}

export { sendVote };
