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
    const contractAddress = '0x452C2aA95e2EEC97C05a974210646C3ED74Ee729'; // Your contract address here


    const web3 = new Web3(new Web3.providers.HttpProvider(`https://polygonzkevm-testnet.g.alchemy.com/v2/lsmKHpFVS4DmS_WzTTQd1S_aXgc5jRBZ`));

    const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

    const interactWithContract = async () => {
        try {
            // Request account access if needed
            await window.ethereum.enable();

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const connectedAccount = accounts[0];

            const nonce = await web3.eth.getTransactionCount(connectedAccount, 'pending');
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = 10000000;

            const rawTransaction = {
                from: connectedAccount,
                nonce: '0x' + nonce.toString(16),
                gasPrice: '0x' + parseInt(gasPrice).toString(16),
                gasLimit: '0x' + parseInt(gasLimit).toString(16),
                to: contractAddress,
                value: '0x0',
                data: contractInstance.methods.store(value).encodeABI(),
            };

            // Sign transaction with MetaMask
            const signedTransaction = await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [rawTransaction],
            });

            console.log('Transaction sent to MetaMask. Please confirm in MetaMask.');

            // Wait for the transaction receipt with a timeout of 3 minutes (adjust as needed)
            const timeout = 180000; // 3 minutes in milliseconds
            const startTime = Date.now();

            let receipt;

            while (Date.now() - startTime < timeout) {
                try {
                    receipt = await web3.eth.getTransactionReceipt(signedTransaction);
                } catch (error) {
                    console.error('Error fetching transaction receipt:', error);
                }

                if (receipt) {
                    console.log('Transaction receipt:', receipt);
                    break; // Exit the loop if receipt is found
                } else {
                    await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 1 second before checking again
                }
            }

            if (!receipt) {
                console.error('Transaction not found within the timeout period.');
            }
        } catch (error) {
            console.error('Error interacting with contract:', error);
        }
    };



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