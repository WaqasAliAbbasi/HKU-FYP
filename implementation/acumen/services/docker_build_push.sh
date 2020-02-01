docker build -t waqasali/fyp-yolo -f $(dirname $0)/yolo/Dockerfile $(dirname $0)/yolo
docker push waqasali/fyp-yolo