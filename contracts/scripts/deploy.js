async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ProjectReputation = await ethers.getContractFactory("ProjectReputation");
  const projectReputation = await ProjectReputation.deploy();

  console.log("Project Reputation address:", projectReputation.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });