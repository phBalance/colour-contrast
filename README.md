# Finding the highest contrast colour
Utility for determining the highest constrasting colour. Built on [color](https://github.com/Qix-/color). It is implemented in [TypeScript](https://www.typescriptlang.org/).

## Getting Started


### Installation

```
npm install --save @phbalance/contrast-colour # Note the non-American spelling

npm install --save color # This is a peer dependency for contrast-colour. Install if you don't already use it in your project.
```

### Use

```
import { chooseHighestContrastColour } from "@phbalance/constrast-colour";

...

const contrastColour: string = chooseHighestContrastColour(foregroundColour, foregroundOpacity, backgroundColour)

```

### API

`chooseHighestContrastColour` was created with itch to have the highest contrast (black or white) text on the blended colour of a surface. It makes the assumption that both of the 2 possible surfaces that can blend can each be represented by a single colour. The method requires 1 parameter for the simple case of no opacity, but supports up to 3 parameters for more complex cases:
* `foregroundColour` (*required*) is the colour of the surface you want to put your text on.
* `foregroundOpacity` (*optional* - default is 1.0) is the opacity of the surface you want to put your text on. You can omit this if the surface you're painting on is not see through at all. Otherwise, you should provide this and the backgroundColour so the effective blended colour can be determined.
* `backgroundColour` (*optional* - default is white) is the colour of the surface behind the main surface that the text will be put on.

The return value is a colour, either white or black, as a 3 byte RGB hex value `string`.

### Reporting Issues

You can report [bugs here](https://github.com/phBalance/contrast-colour/issues). Feel free to make suggestions as well.
