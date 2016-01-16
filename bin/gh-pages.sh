#!/bin/sh

remote="git@github.com:/jonotron/muscles.css.git"

git checkout gh-pages
git merge master
npm run mdcss
git add .
git commit -m "deploy from $WERCKER_STARTED_BY"
result="$(git push -f $remote gh-pages:gh-pages)"

if [[ $? -ne 0]]
then
  warning "$result"
  fail "failed pushing to github pages"
else
  success "pushed to github pages"
fi
