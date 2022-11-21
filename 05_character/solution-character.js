/* eslint-disable no-unused-vars, no-prototype-builtins */

class Character {
    constructor(character, fontName, fontSize) {
        this.character = character;
        this.fontName = fontName;
        this.fontSize = fontSize;
    }
    drawCharacter() {
        return this.character;
    }
}

class Letter extends Character {
    constructor(character, fontName, fontSize, charCase, drawCharacter) {
        super(character, fontName, fontSize, drawCharacter);
        this.charCase = charCase;
    }

    toLowerCase() {
        this.charCase = "lowerCase";
        this.character = this.character.toLowerCase();
        return this;
    }

    toUpperCase() {
        this.charCase = "upperCase";
        this.character = this.character.toUpperCase();
        return this;
    }

    getCase() {
        return this.charCase;
    }
}

class Digit extends Character {
    constructor(character, fontName, fontSize, drawCharacter) {
        super(character, fontName, fontSize, drawCharacter);
        this.isDigit = Number.isInteger(character);
    }


    integerValue() {
        this.character = parseInt(this.character, 10);
        this.isDigit = Number.isInteger(this.character);
    }
}
