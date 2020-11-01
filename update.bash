#!/bin/bash

for i in $(ls)
do
  if [[ $i != "index.html" ]] && [[ $i != "update.bash" ]]
  then
    sed -i "s|$i|attestation-deplacement-derogatoire-q4-2020/$i|g" *.html *.js *.css
  fi

done
