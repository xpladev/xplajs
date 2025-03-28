#!/bin/bash

json_file="./scripts/xpla.protod.config.json"

branch_value=$(jq '.repos[] | select(.owner == "cosmos" and .repo == "evm") | .branch' "$json_file" | tr -d '"')

if [ -n "$branch_value" ]; then
  echo "evm branch : $branch_value"
else
  echo "No git-modules file. Run 'yarn proto' first."
  exit 1
fi

root_dir="git-modules/cosmos/evm/$branch_value/precompiles"
tmp_output_dir="tmp-abi"

mkdir $tmp_output_dir

find "$root_dir" -name "abi.json" -print0 | while IFS= read -r -d $'\0' file; do
  dirname=$(basename "$(dirname "$file")")
  output_filename="${dirname}.json"
  output_filepath="${tmp_output_dir}/${output_filename}"

  echo "Processing '$file' to '$output_filepath'"

  jq '.' "$file" > "$output_filepath"

  if [ $? -eq 0 ]; then
    echo "Save : $output_filepath"
  else
    echo "Error : $output_filepath"
  fi
done

typechain --target ethers-v6 --out-dir ./networks/xpla/src/evm/precompile ./tmp-abi/*.json

rm -rf $tmp_output_dir

echo "Completed"