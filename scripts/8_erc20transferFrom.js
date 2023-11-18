const { ethers } = require("hardhat");

async function main() {
  const [contractOwner] = await ethers.getSigners();
  const token = await ethers.getContractAt('ERC20TransferFrom', '0xC69426e54c2DAB4B11Bd55FB9540913Cc596D543');

  const sender = '0xbF88E352e9a66423b57a6F66ddfcA6637BE03EAC'
  const amount = (await token.allowance(sender, contractOwner.address)).toBigInt();
  await token.transferFrom(sender, contractOwner.address, amount);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
