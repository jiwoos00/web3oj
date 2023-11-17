const hre = require('hardhat');

let web3OJ;

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const ans = await ethers.getContractFactory('MyERC20Init'); 
  const ans2 = await ans.connect(addr1).deploy();
  await ans2.deployed();

  const instance = '0x25b3E13837D7d6B79A584a87BbF493B627D45a0f'; 
  const p = await ethers.getContractFactory('ERC20Init'); 
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
