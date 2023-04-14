#!/bin/bash

postprocess_file() {
    sed -i 's/export declare/declare/' $1
    sed -i '/^import */d' $1
    sed -i '1s/^/declare global{\n/' $1
    sed -i '$s/$/}\nexport{};\n/' $1
}

script=$(realpath "$0")
curdir=$(dirname "$script")

generator=/var/lib/node-api-dotnet/node-api-dotnet-generator
dll_dir=$curdir/dotnet/bin/Debug/net6.0
output_dir=$curdir/src/repositories/@types/dist

mkdir -p $output_dir;
npm exec $generator -- --typedefs $output_dir/dll.d.ts --assembly $dll_dir/dotnet.dll

postprocess_file $output_dir/dll.d.ts