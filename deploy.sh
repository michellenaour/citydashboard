#!/usr/bin/env sh

set -e

npm run serve

cd dist

git init
git add -A
git commit -m 'New Deploment'

git push -f git@github.com:michellenaour/citydashboard.git master:gh-pages

cd -