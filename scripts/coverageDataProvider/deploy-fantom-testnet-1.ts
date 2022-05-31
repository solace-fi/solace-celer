import hardhat from "hardhat";
const { waffle, ethers } = hardhat;
const { deployContract, provider } = waffle;
const BN = ethers.BigNumber;
import { config as dotenv_config } from "dotenv";
import { logContractAddress, isDeployed, expectDeployed } from "../utils";
import { CoverageDataProviderWrapper } from "../../typechain-types/contracts/CoverageDataProviderWrapper";
import { Deployer } from "../../typechain-types/contracts/utils/Deployer";
import { Registry } from "../../typechain-types/contracts/utils/Registry";

dotenv_config();

const deployer = new ethers.Wallet(process.env.PRIVATE_KEY || '', provider);

import { create2Contract } from "./../create2Contract";

import { import_artifacts, ArtifactImports } from "./../../test/utilities/artifact_importer";
import { getNetworkSettings } from "../getNetworkSettings";
import { expect } from "chai";

// CELER MESSAGE_BUS
const CELER_MESSAGE_BUS_ADDRESS              = "0xb92d6933A024bcca9A21669a480C236Cbc973110"

// contract addresses
const COVERAGE_DATA_PROVIDER_ADDRESS         = "0x501ace25625CadaF178558346A4603ceDb5a0A43";
const DEPLOYER_CONTRACT_ADDRESS              = "0x501acE4b4F9085348F60b61Fe3C95937a34565E7";
const REGISTRY_ADDRESS                       = "0x501ACE944a9679b30774Bb87F37a5Af5C4d4910b";
const COVERAGE_DATA_PROVIDER_WRAPPER_ADDRESS = "0x501aceFd6Af9C83170F975595d9f1B9D9Eb044cF";

let artifacts: ArtifactImports;
let deployerContract: Deployer;
let registry: Registry;
let coverageDataProviderWrapper: CoverageDataProviderWrapper;

let signerAddress: string;
let networkSettings: any;

async function main() {
  artifacts = await import_artifacts();
  signerAddress = await deployer.getAddress();
  console.log(`Using ${signerAddress} as deployer and governor`);

  if ((await provider.getNetwork()).chainId == 31337) { // testnet
    console.log('funding')
    var [funder] = await hardhat.ethers.getSigners();
    let tx = await funder.sendTransaction({to: signerAddress, value: BN.from("100000000000000000000")});
    await tx.wait();
  }

  let chainID = (await provider.getNetwork()).chainId;
  networkSettings = getNetworkSettings(chainID);

  await expectDeployed(DEPLOYER_CONTRACT_ADDRESS);
  await expectDeployed(CELER_MESSAGE_BUS_ADDRESS);
  await expectDeployed(COVERAGE_DATA_PROVIDER_ADDRESS);
  await expectDeployed(REGISTRY_ADDRESS);
  deployerContract = (await ethers.getContractAt(artifacts.Deployer.abi, DEPLOYER_CONTRACT_ADDRESS)) as unknown as Deployer;
  registry = (await ethers.getContractAt(artifacts.Registry.abi, REGISTRY_ADDRESS)) as unknown as Registry;

  // deploy contracts
  await registerAddresses()
  await deployCoverageDataProviderWrapper();

  // log addresses
  await logAddresses();
}

async function registerAddresses() {
  // set default addresses
  if (await registry.governance() == signerAddress) {
    //let tx1 = await registry.connect(deployer).set(["messagebus", "coverageDataProvider"], [CELER_MESSAGE_BUS_ADDRESS, COVERAGE_DATA_PROVIDER_ADDRESS], networkSettings.overrides);
    //await tx1.wait(networkSettings.confirmations);

    let messageBusAddress = await registry.get("messagebus");
    expect(messageBusAddress).eq(CELER_MESSAGE_BUS_ADDRESS);
    let dataProviderAddress = await registry.get("coverageDataProvider");
    expect(dataProviderAddress).eq(COVERAGE_DATA_PROVIDER_ADDRESS);
  }
}

async function deployCoverageDataProviderWrapper() {
  if (await isDeployed(COVERAGE_DATA_PROVIDER_WRAPPER_ADDRESS)) {
    const contract = await ethers.getContractFactory("CoverageDataProviderWrapper");
    coverageDataProviderWrapper =  contract.attach(COVERAGE_DATA_PROVIDER_WRAPPER_ADDRESS) as CoverageDataProviderWrapper;
  } else {
    console.log("Deploying Coverage Data Provider Wrapper");
    //const contract = await ethers.getContractFactory("CoverageDataProviderWrapper");
    //coverageDataProviderWrapper = (await contract.deploy(signerAddress, REGISTRY_ADDRESS)) as CoverageDataProviderWrapper;
    const res = await create2Contract(deployer, artifacts.CoverageDataProviderWrapper, [signerAddress, registry.address], {}, "", deployerContract.address);
    coverageDataProviderWrapper = (await ethers.getContractAt(artifacts.CoverageDataProviderWrapper.abi, res.address)) as unknown as CoverageDataProviderWrapper;
    await expectDeployed(coverageDataProviderWrapper.address);
    console.log(`Deployed Coverage Data Provider Wrapper to ${coverageDataProviderWrapper.address}`);

    let messageBusAddress = await coverageDataProviderWrapper.messageBus();
    expect(messageBusAddress).eq(CELER_MESSAGE_BUS_ADDRESS);
    let dataProviderAddress = await coverageDataProviderWrapper.coverageDataProvider();
    expect(dataProviderAddress).eq(COVERAGE_DATA_PROVIDER_ADDRESS);
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
