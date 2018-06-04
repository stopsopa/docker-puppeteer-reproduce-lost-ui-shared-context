
source config.sh

set -o xtrace
set -e

docker build -t $NAME .

