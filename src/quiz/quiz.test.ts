import { test } from "node:test";
import { strictEqual } from "node:assert";

function add(a: number, b: number) {
  return a + b;
}

test("add", () => {
  strictEqual(add(1, 2), 3);
});
