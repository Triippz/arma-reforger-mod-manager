import axios from 'axios';
import * as fs from 'fs';
import {Mod, ServerConfig} from "./types/config-types";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getModData(modId: string, modName: string): Promise<any> {
  const url = `https://reforger.armaplatform.com/_next/data/9IdQ3mkz6oHl3Wx4e7elr/workshop/${modId}-${modName}.json`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for mod ${modName}:`, error);
    return null;
  }
}

async function confirmUpdate(modName: string, oldVersion: string, newVersion: string): Promise<boolean> {
  return new Promise(resolve => {
    rl.question(`Update mod "${modName}" from v${oldVersion} to v${newVersion}? (yes/no): `, answer => {
      resolve(answer.trim().toLowerCase() === 'yes');
    });
  });
}

async function checkForModUpdates(filePath: string, interactive: boolean): Promise<void> {
  try {
    const configFile = fs.readFileSync(filePath, 'utf8');
    const serverConfig: ServerConfig = JSON.parse(configFile);

    // Create a backup of the old config
    const backupFilePath = filePath + '.backup';
    fs.writeFileSync(backupFilePath, configFile);
    console.log(`Backup of the old config saved to: ${backupFilePath}`);

    const updatedMods: Mod[] = [];
    const updateLogs: string[] = [];

    for (const mod of serverConfig.game.mods) {
      const modData = await getModData(mod.modId, mod.name);
      if (modData && modData.pageProps.asset.currentVersionNumber !== mod.version) {
        if (!interactive || (interactive && await confirmUpdate(mod.name, mod.version, modData.pageProps.asset.currentVersionNumber))) {
          updatedMods.push({ ...mod, version: modData.pageProps.asset.currentVersionNumber });
          updateLogs.push(`${mod.name} v${mod.version} -> ${modData.pageProps.asset.currentVersionNumber}`);
        } else {
          updatedMods.push(mod);
        }
      } else {
        updatedMods.push(mod);
      }
    }

    if (updateLogs.length > 0) {
      console.log('Mods updated:');
      updateLogs.forEach(log => console.log(log));
      const updatedConfig = { ...serverConfig, game: { ...serverConfig.game, mods: updatedMods }};
      fs.writeFileSync(filePath, JSON.stringify(updatedConfig, null, 2));
      console.log('Config file updated.');
    } else {
      console.log('All mods are up to date.');
    }

    rl.close();
  } catch (error) {
    console.error('Error updating mods:', error);
    rl.close();
  }
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.length > 2) {
    console.log('Usage: node script.js <path_to_serverConfig.json> [-i]');
    process.exit(1);
  }
  const configFilePath = args[0];
  const interactive = args.includes('-i');
  checkForModUpdates(configFilePath, interactive);
}

main();
