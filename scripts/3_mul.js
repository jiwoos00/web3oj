const hre = require('hardhat');

let web3OJ;

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const ans = await ethers.getContractFactory('MyMulCal'); 
  const ans2 = await ans.connect(addr1).deploy();
  await ans2.deployed();

  const instance = '0xD2263a6904eAD1D542DeE740bED63B948A195b5a'; 
  const p = await ethers.getContractFactory('MulCal'); 
  const p2 = await p.attach(instance);
  await p2.setMultiplicationCalculator(ans2.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
