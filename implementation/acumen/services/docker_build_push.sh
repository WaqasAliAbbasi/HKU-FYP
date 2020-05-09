#!/bin/sh

cd $(dirname $0)
root_dir=`pwd`
count=0
for var in "$@"
do
    cd $root_dir

    if [ "$var" == "alpr" ]; then
        cd alpr
        echo "Processing ALPR..."
        pipenv run python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. **/*.proto
        sed -i '' 's/from proto/from ./g' ./proto/alpr_pb2_grpc.py

        docker build -t waqasali/fyp-alpr .
        docker push waqasali/fyp-alpr
    fi

    if [ "$var" == "yolo" ]; then
        cd yolo
        echo "Processing YOLO..."
        pipenv run python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. **/*.proto
        sed -i '' 's/from proto/from ./g' ./proto/yolo_pb2_grpc.py

        docker build -t waqasali/fyp-yolo .
        docker push waqasali/fyp-yolo
    fi

    (( count++ ))
done