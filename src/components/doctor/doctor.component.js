import React, { useEffect, useState } from 'react'
import { Web3 } from 'web3';
import contractABI from '../../constants/abi.json';
import { bytecode } from '../../constants/bytecode';
function Doctor() {
    const [connectedAccount, setConnectedAccount] = useState('null');
    const [value, setValue] = useState(0);
    const connectMetamask = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setConnectedAccount(accounts[0]);
    }
    const contractAddress = '0xeFe92529Bce45Cf27D3606a969244c49db837Fb8'; // Your contract address here


    const web3 = new Web3(new Web3.providers.HttpProvider(`https://eth-sepolia.g.alchemy.com/v2/OvupbhhqFQLNnrCCusCwTKi9xR4OUc4w`));

    const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

    async function interactWithContract() {



        try {
            const transaction = await contractInstance.methods.store(value).send({
                from: connectedAccount,
            });
            console.log('Transaction Hash:', transaction.transactionHash);
            console.log('Value stored:', value);
            // console.log('Value retrieved:', storedValue);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    async function retrieve() {
        try {
            const storedValue = await contractInstance.methods.retrieve().call({ from: connectedAccount });
            console.log('Value retrieved:', storedValue);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }


    return (
        <>
            <div> <button onClick={() => connectMetamask()}>Connect to Metamask</button></div>
            <h2>{connectedAccount}</h2>
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => interactWithContract()}>Interact with Contract</button>
            <br />
            <button onClick={() => retrieve()}>Retrieve</button>
        </>
    )
}

export default Doctor