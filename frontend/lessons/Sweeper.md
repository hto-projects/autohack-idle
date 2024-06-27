# Sweeper
This upgrade allows you to click and drag across the Collect screen, vacuuming up all bits in your path!

## Create Function
The `create()` function is called once - it creates the scene in the game:

```
create() {

}
```

## The Sweeper
We can create a `sweeper` object using `this.add.rectangle` within the `create()` function:

```ts
// a rectangle at position (0, 0) with width of 50 and height of 50, and color of magenta: #FF00FF
this.sweeper = this.add.rectangle(0, 0, 50, 50, 0xff00ff);
```

## Update Function
The `update()` function is called every time a new frame is rendered:

```ts
update() {
  console.log("these");
  console.log("console logs");
  console.log("will run");
  console.log("once per frame");
}
```

## X & Y Properties
We can move the `sweeper` object by setting its `x` and `y` properties:

```ts
this.sweeper.x = this.input.activePointer.x;
this.sweeper.y = this.input.activePointer.y;
```

## Condition: Pointer Down
We can check if the screen is being pressed using an `if` statement:

```ts
if (this.input.activePointer.isDown) {

}
```

## GameObject Visibility
We can make the `sweeper` object visible or invisible:

```ts
// show the sweeper
this.sweeper.setVisible(true);

// hide the sweeper
this.sweeper.setVisible(false);
```

## Searching All Bits
We can look through all the bits in the game with a `for` loop:

```ts
for (const bit of this.clickyBits) {
}
```

## Finding Overlaps
We can test if the sweeper overlaps with a given bit with `this.physics.overlap`:

```ts
if (this.physics.overlap(this.sweeper, bit)) {

}
```

## Bit Collection
We can collect a bit using the `collectBit` function:

```ts
this.collectBit(bit);
```
