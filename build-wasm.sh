#!/bin/bash
# Thanks to https://medium.com/swlh/intro-to-webassembly-in-react-with-rust-d067408231b9 :)

cd src/wasm-lib/
wasm-pack build --out-dir ../wasm-build/
cd ../../

echo WASM built.