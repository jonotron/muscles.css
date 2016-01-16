#!/bin/sh

remote="git@github.com:/jonotron/muscles.css.git"

git config --global user.email "pleasemailus@wercker.com"
git config --global user.name "werckerbot"
git checkout gh-pages
git merge master
gulp mdcss
git add .
git commit -m "deploy from $WERCKER_STARTED_BY"
result="$(git push -f $remote gh-pages:gh-pages)"

if [[ $? -ne 0 ]]
then
  warning "$result"
  fail "failed pushing to github pages"
else
  success "pushed to github pages"
fi
