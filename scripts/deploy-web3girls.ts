import { ethers } from "hardhat";

async function main() {
  const Web3Girls = await ethers.getContractFactory("Web3Girls");
  const web3Girls = await Web3Girls.deploy();
  await web3Girls.deployed();

  console.log(`Web3Girls deployed to ${web3Girls.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
