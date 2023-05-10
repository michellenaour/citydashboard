#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deploment'

git push -f git@github.com:michellenaour/michellenaour.github.io.git master:gh-pages 

cd -