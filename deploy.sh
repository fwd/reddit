#!/bin/sh
# rm -rf ./dist
# npm run build
# cd ./dist
# git init
# git add .
# git commit -m 'push to gh-pages'
# git push --force git@github.com:anvaka/sayit.git master:gh-pages
# cd ../
# git tag `date "+release-%Y%m%d%H%M%S"`
# git push --tags

npm run build 
cp -r dist/* ../_news/docs
cd ../_news
commit 'docs'
cd cd ../_internet