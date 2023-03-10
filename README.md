# FastReading
Version 1.0.0
## Transform HTML text nodes to better readable text

### Install

<script src="PATH/fast-reading.js"></script>

### Usage

```js
const selector = ".classname"
const config = {
  percentage: 0.7, // Percentage of word length that gets highlighted | optional
  wrapper: ["<strong>", "</strong>"], // Wrapping element | optional
  min: 4, // Minimum length of a word that gets highlighted | optional
};
fastReading(selector, config);
```

#### Wrap with <strong>

```js
fastReading(".fastreading", {
  percentage: 0.7,
  wrapper: ["<strong>", "</strong>"],
  min: 4,
});
```

#### Wrap with <span> with class for styling

```js
fastReading(".fastreading-withclasswrapper", {
  percentage: 0.7,
  wrapper: ['<span class="highlighted">', "</span>"],
  min: 4,
});
```
#### simple usage

```js
fastReading(".fastreading-simple");
```
