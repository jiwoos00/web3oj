const hre = require('hardhat');

let web3OJ;

async function calculatorSol() {
  const [addr1] = await ethers.getSigners();

  const ans = await ethers.getContractFactory('정답컨트랙트이름'); 
  const ans2 = await ans.connect(addr1).deploy();
  await ans2.deployed();

  const instance = '문제컨트랙트주소'; 
  const p = await ethers.getContractFactory('문제컨트랙트이름'); 
  const p2 = await p.attach(instance);
  await p2.실행함수(ans2.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
