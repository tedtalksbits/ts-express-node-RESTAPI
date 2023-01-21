# shebang
#!/bin/bash

echo "How old are you?"
read yearsold

# echo $yearsold * 365

daysold=$(($yearsold * 365))

echo "You are $daysold days old"