#!/usr/bin/env bash
# shellcheck disable=SC1000

# generate by create-script-file v4.0.0
# link (https://github.com/Template-generator/create-script-file/tree/v4.0.0)

# set -x #DEBUG - Display commands and their arguments as they are executed.
# set -v #VERBOSE - Display shell input lines as they are read.
# set -n #EVALUATE - Check syntax of the script but don't execute.

#/ -----------------------------------
#/ Description:  ...
#/ How to:       ...
#/               ...
#/ Option:       --help | -h | -? | help | h | ?
#/                   > show this message
#/               --version | -v | version | v
#/                   > show command version
#/ -----------------------------------
#/ Create by:    Kamontat Chantrachirathunrong <kamontat.c@hotmail.com>
#/ Since:        29/01/2019
#/ -----------------------------------
#/ Error code    1      -- error
#/ -----------------------------------
#/ Known bug:    ...
#/ -----------------------------------
#// Version:      0.0.1   -- description
#//               0.0.2b1 -- beta-format
#//               0.0.2a1 -- alpha-format

version="v$(node -p "require('./package.json').version")"

if [[ "$version" =~ $(git tag --column) ]]; then
	echo "$version is exist, update version on package.json"
	exit 1
fi

echo "generate version $version"

printf "make changelog   -- "

yarn conventional-changelog --preset angular --infile CHANGELOG.md --same-file --release-count 0 --output-unreleased >/dev/null

echo "completed"

printf "make a commit    -- "

git commit -m "chore(changelog): make new changelog" >/dev/null

echo "completed"

printf "create new tag   -- "

git tag "$version" >/dev/null

echo "completed"

printf "push code        -- "

git push && git push --tags &>/dev/null

echo "completed"
