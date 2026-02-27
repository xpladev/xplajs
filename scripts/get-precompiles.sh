#!/bin/bash

json_file="./scripts/xpla.protod.config.json"

# Get branch values from xpladev/xpla and cosmos/evm
xpla_branch=$(jq '.repos[] | select(.owner == "xpladev" and .repo == "xpla") | .branch' "$json_file" | tr -d '"')
evm_branch=$(jq '.repos[] | select(.owner == "cosmos" and .repo == "evm") | .branch' "$json_file" | tr -d '"')

if [ -z "$xpla_branch" ] || [ -z "$evm_branch" ]; then
  echo "No git-modules file. Run 'pnpm proto' first."
  exit 1
fi

echo "xpla branch: $xpla_branch"
echo "evm branch: $evm_branch"

# Define precompiled modules to use
precompile_modules=(
  "IAuth"
  "IBank"
  "IWasm"
  "Bech32I"
  "StakingI"
  "DistributionI"
  "IGov"
  "ISlashing"
)

# Set output directories
output_dir="contracts/interfaces"
xpla_root="git-modules/xpladev/xpla/$xpla_branch"
evm_root="git-modules/cosmos/evm/$evm_branch"

# Create output directory
mkdir -p "$output_dir"

echo "Copying precompiled module .sol files to $output_dir..."

# Process each module
for module in "${precompile_modules[@]}"; do
  echo "Processing: $module"
  
  # Look in xpladev/xpla first
  xpla_file=$(find "$xpla_root" -name "${module}.sol" -type f 2>/dev/null | head -1)
  
  if [ -n "$xpla_file" ]; then
    # Use file from xpladev/xpla if found
    echo "  Found in xpladev/xpla: $xpla_file"
    cp "$xpla_file" "$output_dir/"
    echo "  Copy completed: $output_dir/${module}.sol"
  else
    # Look in cosmos/evm if not found in xpladev/xpla
    evm_file=$(find "$evm_root" -name "${module}.sol" -type f 2>/dev/null | head -1)
    
    if [ -n "$evm_file" ]; then
      echo "  Found in cosmos/evm: $evm_file"
      cp "$evm_file" "$output_dir/"
      echo "  Copy completed: $output_dir/${module}.sol"
    else
      echo "  Warning: $module.sol file not found"
    fi
  fi
done

echo ""
echo "Analyzing import paths to copy additional required files..."

# Extract import paths from copied files
import_paths=()
for sol_file in "$output_dir"/*.sol; do
  if [ -f "$sol_file" ]; then
    echo "Analyzing: $(basename "$sol_file")"
    
    # Extract import paths with relative paths
    while IFS= read -r line; do
      if echo "$line" | grep -q "import.*\.\./"; then
        # Extract "../path/file.sol" format paths
        import_paths_found=$(echo "$line" | sed -n "s/.*[\"']\.\.\/\([^\"']*\)[\"'].*/\1/p")
        if [ -n "$import_paths_found" ]; then
          import_paths+=("$import_paths_found")
          echo "  Import path found: $import_paths_found"
        fi
      fi
    done < "$sol_file"
  fi
done

# Remove duplicates
import_paths=($(printf "%s\n" "${import_paths[@]}" | sort -u))

echo ""
echo "Additional files to copy:"
for import_path in "${import_paths[@]}"; do
  echo "  $import_path"
done

# Copy files found in import paths
for import_path in "${import_paths[@]}"; do
  # Separate filename and directory
  filename=$(basename "$import_path")
  dirname=$(dirname "$import_path")
  
  # Create output subdirectory
  output_subdir="contracts/$dirname"
  mkdir -p "$output_subdir"
  
  echo "Copying: $import_path"
  
  # Look in xpladev/xpla first
  xpla_file=$(find "$xpla_root" -path "*/$import_path" -type f 2>/dev/null | head -1)
  
  if [ -n "$xpla_file" ]; then
    echo "  Found in xpladev/xpla: $xpla_file"
    cp "$xpla_file" "$output_subdir/"
    echo "  Copy completed: $output_subdir/$filename"
  else
    # Look in cosmos/evm if not found in xpladev/xpla
    evm_file=$(find "$evm_root" -path "*/$import_path" -type f 2>/dev/null | head -1)
    
    if [ -n "$evm_file" ]; then
      echo "  Found in cosmos/evm: $evm_file"
      cp "$evm_file" "$output_subdir/"
      echo "  Copy completed: $output_subdir/$filename"
    else
      echo "  Warning: $import_path file not found"
    fi
  fi
done

echo ""
echo "Completed. Check the contracts directory."