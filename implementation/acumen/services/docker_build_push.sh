cd $(dirname $0)

cd alpr
pipenv run python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. **/*.proto
sed -i '' 's/from proto/from ./g' ./proto/alpr_pb2_grpc.py

cd ../yolo
pipenv run python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. **/*.proto
sed -i '' 's/from proto/from ./g' ./proto/chunk_pb2_grpc.py

cd ..

docker build -t waqasali/fyp-yolo -f yolo/Dockerfile yolo
docker push waqasali/fyp-yolo

docker build -t waqasali/fyp-alpr -f alpr/Dockerfile alpr
docker push waqasali/fyp-alpr