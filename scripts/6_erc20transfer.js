const hre = require('hardhat');

let web3OJ;

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const ans = await ethers.getContractFactory('MyERC20Transfer'); 
  const ans2 = await ans.connect(addr1).deploy();
  await ans2.deployed();

  const instance = '0xcf1fbA755e6eb48a8A22ecC7dE8E3f57deD0886A'; 
  const p = await ethers.getContractFactory('ERC20Transfer'); 
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
