import hardhat from "hardhat";
const { waffle, ethers } = hardhat;
const { deployContract, provider } = waffle;
const BN = ethers.BigNumber;
import { config as dotenv_config } from "dotenv";
import { logContractAddress, isDeployed } from "../utils";
import { CoverageDataProviderWrapper } from "../../typechain-types/contracts/CoverageDataProviderWrapper";

dotenv_config();

const deployer = new ethers.Wallet(JSON.parse(process.env.MUMBAI_ACCOUNTS || '[]')[0], provider);

// CELER MESSAGE_BUS
const CELER_MESSAGE_BUS = "0x7d43AABC515C356145049227CeE54B608342c0ad"

// contract addresses
const COVERAGE_DATA_PROVIDER_ADDRESS_GOERLI = "0x9aD91a736E10c02A04C7a7B5AC03d6ABf194Dd00";
const COVERAGE_DATA_PROVIDER_ADDRESS_MUMBAI = "0x42D3565cf5D37acB1980638F9364EE65ae571c3F";

const COVERAGE_DATA_PROVIDER_WRAPPER_ADDRESS = "0xb4Bd07AEdd60519354329eAd73B6015447294FfE";

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
    coverageDataProviderWrapper = (await contract.deploy(signerAddress, CELER_MESSAGE_BUS, COVERAGE_DATA_PROVIDER_ADDRESS_MUMBAI)) as CoverageDataProviderWrapper;
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
