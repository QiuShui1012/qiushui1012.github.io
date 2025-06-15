---
sidebar_position: 2
---

# Qualia Carpet Addition - Limitations
Last updated version is `1.1.0`.

Limitations is a simple scripting-like language, which is based on Java syntax and Minecraft Identifier system.
## Syntax
Limitations supports these elements:
- Long ID (`namespace:path` is item ID，`#namespace:path` is tag ID)
- `!`, `&`, `|`, `()` that are basically consistent with Java syntax

Symbols are short circuit by default and does not support double symbol short circuit, strictly following Java syntax priority (`()` -> `!` -> `&` -> `|` -> ID).  
The Limitations are not space sensitive.  
If an ID does not exist or is written incorrectly, it will be discarded, but the rest will not be affected.   

## Examples
1. `!minecraft:stick` - will pass all items other than Stick.
2. `#minecraft:planks | #minecraft:logs | minecraft:oak_sapling` - will pass all items other than Planks, Logs and Oak Saplings.
3. `!(#minecraft:planks & #minecraft:logs) & minecraft:boots` - Because of there are no item with id minecraft:boots in vanilla, this Limitation will pass nothing.