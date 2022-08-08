**Blockchain Solidity Course Project -  Degree Verification System**


**Install**
Go to the source directory and open terminal, please run this command.

npm install

**To Run Test**
truffle compile
truffle test

**Config**
Rename .env.example to .env and open it, then fill the Huygens_dev/huygens url and account's private key.

HUYGENS_DEV_URL=http://18.182.45.18:8765
HUYGENS_DEV_PRIVATE_KEY=Your Huygens_dev account's private key for deployment
HUYGENS_URL=http://13.212.177.203:8765
HUYGENS_PRIVATE_KEY=Your Huygens account's private key for deployment

**Import the account to remote node and unlock it**
You should import account sepecified in HUYGENS_DEV_PRIVATE_KEY to Huygens_dev remote node in http://18.182.45.18:8765 or you should import account specifed in HUYGENS_PRIVATE_KEY to Huygens remote node in http://13.212.177.203:8765. It depends on which environment you are using for debugging and developing. Otherwise, there is an ProviderError: Invalid account error.

Read the Web3 compatibility section in CCN document for details. https://computecoin-network.gitbook.io/computecoin-network/for-developers/smart-contract-developers/web3-compatibility

This step will not be required after the CCN mainnet launch.

**Deploy and test the contract on Huygens_Dev**
npx hardhat run scripts/contract.js --network Huygens_dev

Deploy and test the contract on Huygens
npx hardhat run scripts/contract.js --network Huygens

Once deployed, you can see the Contract's address and it's balance on terminal.
