
source config.sh

set -e

rm -rf html.html

docker run -it --cap-add=SYS_ADMIN -v $(pwd)/script.js:/script.js -v $(pwd):/app/app $NAME node script.js

