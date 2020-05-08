#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

PROTO_DEST=./src/proto

mkdir -p ${PROTO_DEST}

find ../services -name '*.proto' -not -path "*node_modules/*" | while read line; do
    # JavaScript code generation
    yarn run grpc_tools_node_protoc \
        --js_out=import_style=commonjs,binary:${PROTO_DEST} \
        --grpc_out=${PROTO_DEST} \
        --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
        -I ../services $line

    # TypeScript code generation
    yarn run grpc_tools_node_protoc \
        --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
        --ts_out=${PROTO_DEST} \
        -I ../services $line
done

