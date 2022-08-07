const { expect } = require("chai")
const { ethers, upgrades } = require("hardhat")

async function main() {

  const [owner] = await ethers.getSigners()

  const ERC20 = await ethers.getContractFactory("Verification")
  const erc20 = await ERC20.deploy()
  await erc20.deployed()
  console.log("ERC20 deployed to:", erc20.address)
  console.log("Initial balance: ", await erc20.balanceOf(owner.address))

  await erc20.mint(5000)
  console.log("New balance: ", await erc20.balanceOf(owner.address))
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error)
    process.exit(1)
})