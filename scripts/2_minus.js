const hre = require('hardhat');

let web3OJ;

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const ans = await ethers.getContractFactory('MyMinusCal'); 
  const ans2 = await ans.connect(addr1).deploy();
  await ans2.deployed();

  const instance = '0xF319012360Dd0e33c68c03aF8aCC238c084a57Ca'; 
  const p = await ethers.getContractFactory('MinusCal'); 
  const p2 = await p.attach(instance);
  await p2.setMinusCalculator(ans2.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
