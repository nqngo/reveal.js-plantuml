const assert = require('assert');
const encoder = require('plantuml-encoder');

// Expected Input-Output
const encodedOutput = "SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80";
const plantUMLInput = `@startuml
Bob -> Alice : hello
@enduml`;

// Test basic encoding function
describe('Encoding Bob- -> Alice plantUML Test', () => {
    it('should match Output string generated from PlantUML demo server', () => {
        assert.equal(encoder.encode(plantUMLInput), encodedOutput);
    });
});
