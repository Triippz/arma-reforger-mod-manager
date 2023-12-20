# Arma Reforger Mod Manager

## Overview
This Node.js script checks for updates to mods specified in an Arma Reforger server config file for a game server. It can automatically update the mod versions in the config file if newer versions are available. The script also supports an interactive mode, allowing users to choose which mods to update.

## Requirements
- Node.js
- npm (Node Package Manager)

## Installation
1. **Clone the Repository**: Clone this repository to your local machine or download the script files.
    ```bash
    git clone https://github.com/your-repository/url.git
    cd mod-version-checker
    ```

2. **Install Dependencies**: Run the following command in the project directory to install necessary dependencies:
    ```bash
    npm install
    ```

3. **TypeScript Compilation (if needed)**: If the script is written in TypeScript, compile it to JavaScript using the TypeScript compiler.
    ```bash
    tsc script.ts
    ```

## Usage
Run the script by passing the path to your server config file. Optionally, use the `-i` flag for interactive mode.

- **Standard Mode**:
    ```bash
    node script.js path/to/your/serverConfig.json
    ```

- **Interactive Mode**:
    ```bash
    node script.js path/to/your/serverConfig.json -i
    ```

### Functionality
- **Automatic Updates**: The script checks each mod specified in the server config file and updates it to the latest version if an update is available.
- **Interactive Updates**: When run with the `-i` flag, the script prompts the user to confirm each update.
- **Backup Creation**: The script automatically creates a backup of the original server config file before making any changes.
- **Logging**: Detailed logs are provided for all actions, including successful updates and mods that are already up to date.

## Contributing
Contributions to this project are welcome. Please fork the repository and submit a pull request with your proposed changes.

## License
This project is licensed under [Your License]. Please see the `LICENSE` file for more details.
