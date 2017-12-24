# chord-translator

> `chord-translator` translate any musical chord ! 

## Install

```bash
npm i -S chord-translator
```

or

```bash
yarn add chord-translator
```

## Usage

```javascript
import chordTranslator from "chord-translator"

// chordTranslator(root, chordType, baseKey)

chordTranslator("C")          // ["C3", "E3", "G3"]
chordTranslator("A", "add9")  // ["A3", "Db4", "E4", "B4"]
chordTranslator("G", "m7", 5) // ["G5", "Bb5", "D6", "F6"]

// complex chords

chordTranslator("D", "M9(13)omit3")    // ["D3", "A3", "Db4", "E4", "B4"]
chordTranslator("Ab", "7(b9,#11,b13)") // ["Ab3", "C4", "Eb4", "Gb4", "A4", "D5", "E5"]

// a variety of notation

chordTranslator("C", "M7")   // ["C3", "E3", "G3", "B3", "E4"]
chordTranslator("C", "maj7") // ["C3", "E3", "G3", "B3", "E4"]
chordTranslator("C", "△7")  // ["C3", "E3", "G3", "B3", "E4"]
```

## License

MIT License
