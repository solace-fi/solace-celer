/**
 * Tools such as MythX require contracts to be preprocessed.
 * The main advantage of Artifact Importer is it's ability to seamlessly switch between raw and processed contracts.
 * It also removes repetitive code from the tests.
 */

import { config as dotenv_config } from "dotenv";
dotenv_config();
import { ContractJSON } from "ethereum-waffle/dist/esm/ContractJSON";

export interface ArtifactImports { [contract_name: string]: ContractJSON };

export const EMPTY_ARTIFACTS: ArtifactImports = {};

export async function import_artifacts() {
  let artifacts: ArtifactImports = {};

  let artifact_dir = process.env.USE_PROCESSED_FILES === "true" ? "../../artifacts/contracts_processed" : "../../artifacts/contracts";
  // utils
  artifacts.Registry = await tryImport(`${artifact_dir}/utils/Registry.sol/Registry.json`);
  artifacts.Deployer = await tryImport(`${artifact_dir}/utils/Deployer.sol/Deployer.json`);

  artifacts.CoverageDataProviderWrapper = await tryImport(`${artifact_dir}/CoverageDataProviderWrapper.sol/CoverageDataProviderWrapper.json`);

  return artifacts;
}

async function tryImport(filepath: string) {
  try {
    var imp = await import(filepath);
    return imp;
  } catch(e) {
    return undefined;
  }
}
