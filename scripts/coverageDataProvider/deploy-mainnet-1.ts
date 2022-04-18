import hardhat from "hardhat";
const { waffle, ethers } = hardhat;
const { deployContract, provider } = waffle;
const BN = ethers.BigNumber;
import { config as dotenv_config } from "dotenv";
import { logContractAddress, isDeployed } from "../utils";
import { CoverageDataProviderWrapper } from "../../typechain-types/contracts/CoverageDataProviderWrapper";

dotenv_config();

const deployer = new ethers.Wallet(JSON.parse(process.env.MAINNET_ACCOUNTS || '[]')[0], provider);

// CELER MESSAGE_BUS MAINNET
const CELER_MESSAGE_BUS = "0x4066D196A423b2b3B8B054f4F40efB47a74E200C"

// contract addresses
const COVERAGE_DATA_PROVIDER_ADDRESS_MAINNET = "";
const COVERAGE_DATA_PROVIDER_WRAPPER_ADDRESS = "";

let coverageDataProviderWrapper: CoverageDataProviderWrapper;
let signerAddress: string;

async function main() {
  signerAddress = await deployer.getAddress();
  console.log(`Using ${signerAddress} as deployer and governor`);

  if ((await provider.getNetwork()).chainId == 31337) { // testnet
    console.log('funding')
    var [funder] = await hardhat.ethers.getSigners();
    let tx = await funder.sendTransaction({to: signerAddress, value: BN.from("100000000000000000000")});
    await tx.wait();
  }

  // deploy contracts
  await deployCoverageDataProviderWrapper();

  // log addresses
  await logAddresses();
}

async function deployCoverageDataProviderWrapper() {
  if (await isDeployed(COVERAGE_DATA_PROVIDER_WRAPPER_ADDRESS)) {
    const contract = await ethers.getContractFactory("CoverageDataProviderWrapper");
    coverageDataProviderWrapper =  contract.attach(COVERAGE_DATA_PROVIDER_WRAPPER_ADDRESS) as CoverageDataProviderWrapper;
  } else {
    console.log("Deploying Coverage Data Provider Wrapper");
    const contract = await ethers.getContractFactory("CoverageDataProviderWrapper");
    coverageDataProviderWrapper = (await contract.deploy(signerAddress, CELER_MESSAGE_BUS, COVERAGE_DATA_PROVIDER_ADDRESS_MAINNET)) as CoverageDataProviderWrapper;
    console.log(`Deployed Coverage Data Provider Wrapper to ${coverageDataProviderWrapper.address}`);
  }
}

async function logAddresses() {
  console.log("");
  console.log("| Contract Name                | Address                                      |");
  console.log("|------------------------------|----------------------------------------------|");
  logContractAddress("CoverageDataProviderWrapper", coverageDataProviderWrapper.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
  });
