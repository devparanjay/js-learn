# Scopes

## Global Scope

- Declaration outside any Function or Block.

## Function Scope

- Declaration within a Funtion.
- Can have same named var, let, and const, without altering the values of the ones in any other scope.
- The values declared inside the function would not be directly accessible and usable outside of it.

## Block Scope

- Declaration within any Block other than Functions (Conditionals, loops, etc).
- Global var is accessible and usable from within the Block to the rest of the program.
- Global let and const are accessible and usable inside the Block, but if new let and const are declared with the same names as the Global ones, then the new values declared inside the Block are not accessible and usable to the rest of the program outside the block.
- The new values of the let and const declared inside the Block would take priority over the Global values if the names are same.