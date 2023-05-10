#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deploment'

git push -f git@github.com:michellenaour/vitydashboard.git master:main
#d
cd -