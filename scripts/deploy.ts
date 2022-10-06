import { ethers } from "hardhat";

async function main() {
  const StudyContract = await ethers.getContractFactory("StudyContract");
  const studyContract = await StudyContract.deploy();
  await studyContract.deployed();

  console.log(`StudyContract contract deployed to ${studyContract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
