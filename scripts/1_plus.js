const hre = require('hardhat');

let web3OJ;

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const ans = await ethers.getContractFactory('MyPlusCal'); 
  const ans2 = await ans.connect(addr1).deploy();
  await ans2.deployed();

  const instance = '0xbb626fd0B652d94b7De63355a1bC7A1C3a7802c2'; 
  const p = await ethers.getContractFactory('PlusCal'); 
  const p2 = await p.attach(instance);
  await p2.setPlusCalculator(ans2.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
