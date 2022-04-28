import chai from "chai";
import { waffle, ethers } from "hardhat";
import { BigNumber as BN, ContractFactory } from "ethers";
const { deployContract, solidity } = waffle;
import { MockProvider } from "ethereum-waffle";
import { CoverageDataProviderWrapper, Registry } from "../typechain-types";
const { expect } = chai;
chai.use(solidity);


const provider: MockProvider = waffle.provider;
const [deployer, governor, user, messagebus, coveragedataprovider] = provider.getWallets();

describe("CoverageDataProviderWrapper", () => {
  let coverageDataProviderWrapper: CoverageDataProviderWrapper;
  let contract: ContractFactory;
  let registry: Registry;

  const CELER_MESSAGE_BUS = "0xF25170F86E4291a99a9A560032Fe9948b8BcFBB2";
  const COVERAGE_DATA_PROVIDER_ADDRESS = "0x501ACe6D80111c9B54FA36EEC5f1B213d7F24770";

  const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
  const ONE_MILLION_USD = BN.from("1000000000000000000000000"); // 1M USD(DAI)
  const UWP_POOL_NAMES = {
    "MAINNET_1": "mainnet_1",
    "AUORA_1": "auora_1",
    "MATIC_1": "matic_1",
    "MAINNET_2": "mainnet_2",
    "AUORA_2": "auroa_2",
    "MATIC_2": "matic_2"
  }

  before(async () => {
    await deployer.sendTransaction({to:deployer.address}); // for some reason this helps solidity-coverage
    contract = await ethers.getContractFactory("CoverageDataProviderWrapper");

    let registryFactory = await ethers.getContractFactory("Registry");
    registry = (await registryFactory.deploy(governor.address)) as Registry;
  });

  describe("deployment", () => {
    it("should revert for zero address governance", async () => {
      await expect(contract.deploy(ZERO_ADDRESS, registry.address)).to.be.revertedWith("zero address governance");
    });

    it("should revert for zero address registry", async () => {
      await expect(contract.deploy(governor.address, ZERO_ADDRESS)).to.be.revertedWith("zero address registry");
    });

    it("should revert for zero address message bus", async () => {
      await expect(contract.deploy(governor.address, registry.address)).to.be.revertedWith("zero address messagebus");
      await registry.connect(governor).set(["messagebus"], [CELER_MESSAGE_BUS]);
    });

    it("should revert for zero address data provider", async () => {
      await expect(contract.deploy(governor.address, registry.address)).to.be.revertedWith("zero address data provider");
      await registry.connect(governor).set(["coverageDataProvider"], [COVERAGE_DATA_PROVIDER_ADDRESS]);
    });

    it("should deploy", async () => {
      coverageDataProviderWrapper = await contract.deploy(governor.address, registry.address) as CoverageDataProviderWrapper;
      expect(await coverageDataProviderWrapper.connect(user).coverageDataProvider()).equal(COVERAGE_DATA_PROVIDER_ADDRESS);
      expect(await coverageDataProviderWrapper.connect(user).governance()).equal(governor.address);
      expect(await coverageDataProviderWrapper.connect(user).messageBus()).equal(CELER_MESSAGE_BUS);
      expect(await coverageDataProviderWrapper.connect(user).owner()).equal(deployer.address);
    });

    it("starts with initial values", async () => {
      expect(await coverageDataProviderWrapper.connect(user).nonce()).equal(0);
      expect(await coverageDataProviderWrapper.connect(user).numsOfCaller()).equal(1); // governance
      expect(await coverageDataProviderWrapper.connect(user).numsOfReceiver()).equal(0);
    });
  });

  describe("set message bus", () => {
    it("starts with default", async () => {
      expect(await coverageDataProviderWrapper.connect(user).messageBus()).equal(CELER_MESSAGE_BUS);
    });

    it("revert for non-owner(deployer)", async () => {
      await expect(coverageDataProviderWrapper.connect(governor).setMessageBus(messagebus.address)).to.revertedWith("Ownable: caller is not the owner");
    });

    it("can set", async () => {
      const tx = await coverageDataProviderWrapper.connect(deployer).setMessageBus(messagebus.address);
      await expect(tx).emit(coverageDataProviderWrapper, "MessageBusUpdated").withArgs(messagebus.address);
    });
  });

  describe("set coverage data provider", () => {
    it("starts with default", async () => {
      expect(await coverageDataProviderWrapper.connect(user).coverageDataProvider()).equal(COVERAGE_DATA_PROVIDER_ADDRESS);
    });

    it("revert for non-governor", async () => {
      await expect(coverageDataProviderWrapper.connect(user).setCoverageDataProvider(coveragedataprovider.address)).to.revertedWith("!governance");
    });

    it("can set", async () => {
      const tx = await coverageDataProviderWrapper.connect(governor).setCoverageDataProvider(coveragedataprovider.address);
      await expect(tx).emit(coverageDataProviderWrapper, "CoverageDataProviderSet").withArgs(coveragedataprovider.address);
    });
  });

});
