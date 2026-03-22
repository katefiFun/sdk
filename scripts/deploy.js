async function main() {
  const Reward = await ethers.getContractFactory("Reward");
  const reward = await Reward.deploy();

  await reward.deployed();
  console.log("Contract deployed to:", reward.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
