import { describe, expect, it, test } from "vitest";

describe("Example Suite", () => {
    it("Should Pass", () => {
        const sum = 2 + 2;
        expect(sum).toEqual(4);
    })
})