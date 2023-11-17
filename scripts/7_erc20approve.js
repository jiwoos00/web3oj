const hre = require('hardhat');

let web3OJ;

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const ans = await ethers.getContractFactory('MyERC20Approve'); 
  const ans2 = await ans.connect(addr1).deploy();
  await ans2.deployed();

  const instance = '0x8de28262b116Cd24769D63B62C1b51fE9B533093'; 
  const p = await ethers.getContractFactory('ERC20Approve'); 
  const p2 = await p.attach(instance);
  await p2.setWeb3ojt(ans2.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
