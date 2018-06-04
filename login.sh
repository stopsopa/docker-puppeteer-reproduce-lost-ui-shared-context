
source config.sh

set -o xtrace
set -e

docker run -it --cap-add=SYS_ADMIN -v $(pwd)/script.js:/script.js -v $(pwd):/app/app $NAME sh

