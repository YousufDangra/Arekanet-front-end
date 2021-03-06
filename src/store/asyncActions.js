import { setupWeb3, setupContract, addEthereumAccounts, addTransaction, web3LoadingError } from "./actions";
import Web3 from "web3";
import { AKA_ABI, AKA_ADDRESS } from '../contract/ExpenseTrackerContract';

export const loadBlockchain = async(dispatch) =>{
    try {
        console.log("Web3 = ",Web3);
        console.log("Web3.givenProvider = ",Web3.givenProvider);
        if(Web3.givenProvider){
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(AKA_ABI,AKA_ADDRESS);
            dispatch(setupContract(contract));
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts));
            console.log("contract = ",contract);
            console.log("contract.methods = ",contract.methods);
      
        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch(error){
        console.log("Error in loading Web3 = ",error);
        if(error.code===4001){
            
            dispatch(web3LoadingError(error.message));
        }
    }
}



export const buyTokensAsync = async (beneficiary, accounts, contract, etherValue, dispatch) => {
    console.log("before transaction");
    const price = etherValue.toString(); //change it
    const receipt = await contract.methods
        .buyTokens(beneficiary)
        .send({ from: accounts[0], value: price });
    console.log("after  transaction ", receipt);
}

export const rateAsync = async (contract) => {
    const receipt = await contract.methods
        .rate_().call();
    console.log("after rateAsync  transaction ", receipt);
    return receipt
}
