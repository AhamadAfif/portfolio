#!/bin/bash

# Create src directory structure
mkdir -p src/components/ui
mkdir -p src/components/figma
mkdir -p src/data
mkdir -p src/styles
mkdir -p public

# Copy files to src directory
cp -r components/* src/components/ 2>/dev/null || true
cp -r data/* src/data/ 2>/dev/null || true
cp -r styles/* src/styles/ 2>/dev/null || true

# Copy App.tsx if it exists in root
if [ -f App.tsx ]; then
  cp App.tsx src/App.tsx
fi

echo "Build setup complete!"
