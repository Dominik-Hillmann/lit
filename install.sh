#!/bin/bash

# Thanks to this blog for describing how to use WASM here:
# https://medium.com/swlh/intro-to-webassembly-in-react-with-rust-d067408231b9

cargo install wasm-pack || echo "wasm-pack already installed."
echo " "
./build-wasm.sh
echo " "
npm install
