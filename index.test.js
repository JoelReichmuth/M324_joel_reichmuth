import assert from "assert"
import { sum } from "./index.js"
// Datei: index.test.js
// TODO: Setzen Sie die korrekten Imports ein
describe("sum", () => {
    it("should add 1 + 2 to equal 4", () => {
        assert.equal(sum(1, 2), 4);
    });
});
