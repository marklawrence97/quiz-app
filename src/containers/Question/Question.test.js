import React from "react";
import Question from "./Question";
import { decodeString } from "./Question";

test('Decode function parses " correctly', () => {
  expect(decodeString("Test data &quot;parses&quot;")).toBe(
    'Test data "parses"'
  );
});

test("Decode function parses ' correctly ", () => {
    expect(decodeString("Parse API&#039;s test data&#039;")).toBe(
        "Parse API's test data'"
    )
})

test("Decode parses é correctly", () => {
    expect(decodeString("touch&eacute; t&eacute;sting")).toBe(
        "touché tésting"
    )
})