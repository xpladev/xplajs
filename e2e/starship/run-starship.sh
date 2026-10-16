#!/bin/sh
set -eu

pnpm run starship:build

pnpm starship start --config "./starship/configs/${STARSHIP_CONFIG:-config.yaml}"

kubectl port-forward pods/dimension-37-1-genesis-0 8545:8545 > /dev/null 2>&1 &
