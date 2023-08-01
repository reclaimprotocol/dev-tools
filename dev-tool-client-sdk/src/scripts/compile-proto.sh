PROTO_DEST=./src/generated/

DIR=./proto
OUT_DIR=./src/generated

# grpc_tools_node_protoc \
#     --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#     --ts_out=${PROTO_DEST} \
#     -I ./proto \
#     ./proto/*.proto

# grpc_tools_node_protoc \
#     --js_out=import_style=commonjs,binary:${PROTO_DEST} \
#     --grpc_out=${PROTO_DEST} \
#     --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
#     -I ./proto \
#     ./proto/*.proto

# protoc -I=./src/proto \
#    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#    --js_out=import_style=commonjs,binary:$OUT_DIR \
#    --grpc-web_out=import_style=typescript,mode=grpcweb:${OUT_DIR} \
#    ./src/proto/*.proto

./node_modules/.bin/grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=src/generated \
  --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false \
  --proto_path=./src/proto \
  ./src/proto/channel.proto

# protoc \
# --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
# --js_out=import_style=commonjs,binary:src/generated \
# --ts_out=service=grpc-web:src/generated \
# -I ./src/proto \
# ./src/proto/*.proto