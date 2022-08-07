### Install
Go to the source directory and open terminal, please run this command.<br>
> npm install

### To Run Test
> truffle compile <br>
> truffle test

### Config
Rename .env.example to .env and open it, then fill the Huygens\_dev/huygens url and account's private key.<br> 
> HUYGENS\_DEV\_URL=http://18.182.45.18:8765<br>
> HUYGENS\_DEV\_PRIVATE\_KEY=Your Huygens_dev account's private key for deployment<br>
> HUYGENS\_URL=http://13.212.177.203:8765<br>
> HUYGENS\_PRIVATE\_KEY=Your Huygens account's private key for deployment<br>

### Import the account to remote node and unlock it
You should import account sepecified in HUYGENS\_DEV\_PRIVATE\_KEY to Huygens_dev remote node in http://18.182.45.18:8765 or you should import account specifed in HUYGENS\_PRIVATE\_KEY to Huygens remote node in http://13.212.177.203:8765. It depends on which environment you are using for debugging and developing. Otherwise, there is an `ProviderError: Invalid account` error.

Read the Web3 compatibility section in CCN document for details.
[https://computecoin-network.gitbook.io/computecoin-network/for-developers/smart-contract-developers/web3-compatibility](https://computecoin-network.gitbook.io/computecoin-network/for-developers/smart-contract-developers/web3-compatibility) <br>

**This step will not be required after the CCN mainnet launch.**

### Deploy and test the contract on Huygens_Dev
> npx hardhat run scripts/contract.js --network Huygens_dev<br>

### Deploy and test the contract on Huygens
> npx hardhat run scripts/contract.js --network Huygens<br>

Once deployed, you can see the Contract's address and it's balance on terminal.<br>
