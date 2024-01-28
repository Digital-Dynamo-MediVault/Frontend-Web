import React, { useState } from 'react'
import axios from 'axios'
import { apiUrl, contractAddress } from '../../constants/apiUrl'
import { useLocation } from 'react-router-dom';
import { Web3 } from 'web3';
import contractABI from '../../constants/abi.json';

function Activate() {
    const [success, setSuccess] = useState(false)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = async () => {
        if (password === confirmPassword) {
            window.ethereum.request({ method: 'eth_requestAccounts' }).then(function (accounts) {
                console.log(accounts[0]);
                queryParams.get("role") === "patient" ?
                    axios.post(`${apiUrl}/patient/activate`, { email: queryParams.get('email'), password: password, metamaskAddress: accounts[0] }).then(async function (response) {
                        console.log(response.data.user);
                        try {
                            // Request account access if needed
                            const web3 = new Web3(new Web3.providers.HttpProvider(`https://polygonzkevm-testnet.g.alchemy.com/v2/lsmKHpFVS4DmS_WzTTQd1S_aXgc5jRBZ`));


                            const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
                            await window.ethereum.enable();



                            const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
                            const gasPrice = await web3.eth.getGasPrice();
                            const gasLimit = 28500000;

                            const rawTransaction = {
                                from: accounts[0],
                                nonce: '0x' + nonce.toString(16),
                                gasPrice: '0x' + parseInt(gasPrice).toString(16),
                                gasLimit: '0x' + parseInt(gasLimit).toString(16),
                                to: contractAddress,
                                value: '0x0',
                                data: contractInstance.methods.addPatient(
                                    response.data.user.pId,
                                    response.data.user.name,
                                    response.data.user.age,
                                    response.data.user.gender,
                                    response.data.user.email,
                                    response.data.user.phone,
                                    response.data.user.addressp,
                                    response.data.user.bloodGroup,
                                    response.data.user.guardian,
                                    response.data.user.guardianp.toString(),
                                    response.data.user.metamaskAddress).encodeABI(),
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
                                    window.alert(`Your Patient ID Is ${response.data.user.pId}`)
                                    setSuccess(true);
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
                    }) :
                    axios.post(`${apiUrl}/doctor/activate`, { email: queryParams.get('email'), password: password, metamaskAddress: accounts[0] }).then(async function (response) {
                        console.log(response.data.user);

                        try {
                            // Request account access if needed
                            const web3 = new Web3(new Web3.providers.HttpProvider(`https://polygonzkevm-testnet.g.alchemy.com/v2/lsmKHpFVS4DmS_WzTTQd1S_aXgc5jRBZ`));

                            const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
                            await window.ethereum.enable();



                            const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
                            const gasPrice = await web3.eth.getGasPrice();
                            const gasLimit = 28500000;

                            const rawTransaction = {
                                from: accounts[0],
                                nonce: '0x' + nonce.toString(16),
                                gasPrice: '0x' + parseInt(gasPrice).toString(16),
                                gasLimit: '0x' + parseInt(gasLimit).toString(16),
                                to: contractAddress,
                                value: '0x0',
                                data: contractInstance.methods.addDoctor(
                                    response.data.user.dId,
                                    response.data.user.name,
                                    response.data.user.age,
                                    response.data.user.gender,
                                    response.data.user.email,
                                    response.data.user.phone.toString(),
                                    response.data.user.exprience,
                                    response.data.user.specialization,
                                    response.data.user.metamaskAddress).encodeABI(),
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
                                    window.alert(`Your Doctor ID Is ${response.data.user.dId}`)
                                    setSuccess(true);
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
                    })

            });

        } else {
            console.log('Passwords do not match');
        }
    }
    return (
        <>
            {
                success ?
                    <div class="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
                        <h2 class="text-2xl font-bold mb-4">Activate</h2>
                        <p class="text-gray-600">Your account has been successfully activated.</p>
                    </div>
                    :


                    <div class="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
                        <h2 class="text-2xl font-bold mb-4">Activate</h2>
                        <form class="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-600">Password:</label>
                                <input
                                    class="mt-1 p-2 w-full border rounded-md"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-600">Confirm Password:</label>
                                <input
                                    class="mt-1 p-2 w-full border rounded-md"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button class="w-full bg-blue-500 text-white py-2 rounded-md" type="submit">Connect to Wallet</button>
                        </form>
                    </div>
            }
        </>


    )
}

export default Activate