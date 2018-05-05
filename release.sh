#!/bin/sh

GITHUB_RELEASE_GO=https://github.com/tsauvajon/github-release/releases/download/v0.7.2/linux-amd64-github-release
# curl -s $GITHUB_RELEASE_GO | tar xvjf -
# GR=bin/linux/amd64/github-release
GR=github_release
curl -s $GITHUB_RELEASE_GO --output $GR
chmod +x $GR

# Create a GitHub release
$GR release \
  --user $CIRCLE_PROJECT_USERNAME \
  --repo $CIRCLE_PROJECT_REPONAME \
  --tag $CIRCLE_TAG \
  --name $CIRCLE_TAG

# Add all files and folders, recursively, to a tag-named .zip 
FILENAME="$REPO-$CIRCLE_TAG.zip"
zip -r $FILENAME *

# Upload the .zip to the release as an asset
$GR upload \
  --user $CIRCLE_PROJECT_USERNAME \
  --repo $CIRCLE_PROJECT_REPONAME \
  --tag $CIRCLE_TAG \
  --name $FILENAME \
  --file $FILENAME
