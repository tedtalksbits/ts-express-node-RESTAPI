#!/bin/bash

echo \"is this a test?\"
read test

if [ $test = \"yes\" ]; then
    echo \"this is a test\"
else
    npm run dev
fi