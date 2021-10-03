### Require
```
npm install -g truffle
npm install -g ganache-cli
```

### QuickStart
```
yarn install
ganache-cli -p 7545
truffle compile
truffle migrate --network development
truffle console
truffle(development)> let instanceVoters = await Voters.deployed()
truffle(development)> instanceVoters.setVote()
truffle(development)> instanceVoters.getVote()
```
