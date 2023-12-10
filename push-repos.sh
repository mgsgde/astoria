#!/bin/sh

# Change to the webapp directory
cd webapp

# Run npm build
echo "Running npm build..."
npm run build

# Check if npm build was successful
if [ $? -eq 0 ]; then
  echo "Build successful. Adding build artifacts to commit."

  # Add the build artifacts to the staging area
  git add ./out

  # Commit the changes
  git commit --amend --no-edit
  
  git push origin main
  exit 0
else
  echo "Build failed. Aborting push."
  exit 1
fi
