#!/usr/bin/env sh

set -e

npm run build

cd dist

echo 'www.raiyan.me' > CNAME

git init
git add -A
git commit -m "New Deployment"
git push -f git@github.com:RaiyanRahman/webpage.git master:gh-pages

cd -
