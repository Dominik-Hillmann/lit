use wasm_bindgen::prelude::*;

fn main() {
    println!("Hello, world!");
}

#[wasm_bindgen]
pub fn add_two_ints(a: u32, b: u32) -> u32 {
    return a + b;
}
