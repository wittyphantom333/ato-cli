<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://avatars.githubusercontent.com/u/94903315?s=200&v=4" alt="Project logo"></a>
</p>

<h3 align="center">ato-cli</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/wittyphantom333/ato-cli.svg)](https://github.com/wittyphantom333/ato-cli/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/wittyphantom333/ato-cli.svg)](https://github.com/wittyphantom333/ato-cli/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> allThingsOps CLI to help DevOps -> MLOps -> DataOps
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

allThingsOps CLI for use with everything Ops and everything FiveM.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

API for getting FiveM server info & status.

## Installation 

```
npm i ato-cli -g
```

```
**ALL FUNCTION REQUESTS**
- getPlayers - Number of players online - (number)
- getPlayersAll - List all players in an array - (string)
- getMaxPlayers - Max players that are able to join the server - (number)
- getResources - Get resource names of all server resources - (string/array)
- getTags - Get all server tags - (string)
- getServer - Get the whole server object - (string)
- getOnesync - See if the server has OneSync enabled - (boolean)
- getLocale - The language of the server - (string)
- getGamename - Get the name of the server - (string)
- getEnhancedHostSupport - ... - (boolean)
- getlicenseKeyToken - The license key for the server - (string)
- getScriptHookAllowed - See if the server supports external mod menus from the client - (boolean)
```

## 🔧 Running the tests <a name = "tests"></a>

```
ato test
```

### Break down into end to end tests

Test the API status

```
ato api test
```

### And coding style tests

How to login

```
ato login
```

## 🎈 Usage <a name="usage"></a>

See if server is online (json)
```js
const FiveM = require("fivem") // Import the npm package.
const srv = new FiveM.Server('IP:PORT') // Set the IP with port.
 
srv.getServerStatus().then(data => console.log(data)) // Get & log the data!

//if online returns json {online: true}
// if offline returns json {online: false, url: x, method: x}
```

Get Player Count (in numbers)
```js
const FiveM = require("fivem") // Import the npm package.
const srv = new FiveM.Server('IP:PORT') // Set the IP with port.
 
srv.getPlayers().then(data => console.log(data)) // Get & log the data!
```

Get all Resources
```js
const FiveM = require("fivem") // Import the npm package.
const srv = new FiveM.Server('IP:PORT') // Set the IP with port.
 
srv.getResources().then(data => console.log(data)) // Get & log the data!
```

## 🚀 Deployment <a name = "deployment"></a>

```
npm i -g
```

## ⛏️ Built Using <a name = "built_using"></a>

- [Yarn](https://www.yarn.com/) - Build Tool
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [VSCode](https://vscode.com/) - Coding IDE

## ✍️ Authors <a name = "authors"></a>

- [@wittyphantom333](https://github.com/wittyphantom333) - Idea & Initial work

See also the list of [contributors](https://github.com/wittyphantom333/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Thank you to @JackCrispy for the API part of this project
