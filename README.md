# FastReading
## Transform HTML text nodes to better readable text

### Install
<script src="PATH/fast-reading.js"></script>

### Usage
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
