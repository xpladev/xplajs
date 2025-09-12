#!/usr/bin/env bash

# cross platform `mkdir -p`
mkdirp() {
  node -e "fs.mkdirSync('$1', { recursive: true })"
}

cd contracts

npm run clean

npm run compile

mkdirp build/contracts
cp -r ../artifacts/contracts/**/**/*.json build/contracts
rm build/contracts/*.dbg.json
pwd

cd ..
node ./scripts/remove-ignored-artifacts.js