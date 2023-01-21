#!/bin/bash

echo "Who is your daddy and what does he do?"
echo "1. He is a programmer"
echo "2. He is a carpenter"
echo "3. He is a plumber"

read daddy

if [ $daddy = "1" ]; then 
    echo "You are right!!! He is a programmer"
else
    echo "Sorry You are wrong!!! He is a programmer"
fi