#!/bin/sh
# force push the gh-pages directory to the gh-pages branch

# for CI, you will need to add the GIT_AUTHOR_NAME, GIT_AUTHOR_EMAIL
# environment variables and set a SSH key

cd gh-pages
rm -rf .git
git init

git config user.email "jonotron@gmail.com"
git config user.name "Semaphore CI Bot"
git add .
git commit -m "deploy new gh-pages"
result="$(git push -f git@github.com:/jonotron/muscles.css.git master:gh-pages)"

if [[ $? -ne 0 ]]
then
  echo "$result"
  exit 1 
else
  echo "pushed to github pages"
fi

