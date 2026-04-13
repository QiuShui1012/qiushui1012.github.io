---
title: Qualia Carpet Addition - Limitations
description: Limitation predicate used in crafterLimitation and easyHopperLimitation rules.
order: 2
---

# Qualia Carpet Addition - Limitations
Last updated version is `2.0.0`.

Limitations is a simple scripting-like language, which is based on Java syntax and Minecraft Identifier/ResourceLocation system.

It has been removed in `2.0.0` with `crafterLimitation` and `easyHopperLimitation` rules.

## Syntax
Limitations supports these elements, and are not space sensitive:

- Long ID (`namespace:path` is item ID，`#namespace:path` is tag ID)
- `!`, `&`, `|`, `()` that are basically consistent with Java syntax

Symbols are short circuit by default and does not support double symbol short circuit, strictly following Java syntax priority (`()` -> `!` -> `&` -> `|` -> ID).

If an ID does not exist or is written incorrectly, it will be discarded, but the rest will be contained.

## Examples
1. `!minecraft:stick`  
   Will pass all items other than Stick.
2. `#minecraft:planks | #minecraft:logs | minecraft:oak_sapling`  
   Will pass Planks, Logs and Oak Saplings.
3. `#minecraft:planks & #minecraft:logs & minecraft:oak_sapling`  
   If `#minecraft:planks` and `#minecraft:logs` tags contain Oak Sapling, than it will pass Oak Sapling;  
   otherwise it will not pass any items.