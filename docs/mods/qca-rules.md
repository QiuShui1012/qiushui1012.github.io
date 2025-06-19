---
sidebar_position: 1
---

# Qualia Carpet Addition - Rules
Last updated version is `1.2.2`.

## beaconIncreaseInteractionRange
Allows beacon to increase players' interaction range when the players are in the range of the beacon.  
  
**Active version:** From `1.0.4` to `Current`  
**Type:** `boolean`  
**Default value:** `false`  
**Suggests options:** `false`, `true`  
**Categories:** `QCA`, `FEATURE`, `EXPERIMENTAL`  

## beaconIncreaseInteractionRangeValue
Sets the value for beacon when calculating the increased interaction range if the rule [beaconIncreaseInteractionRange](#beaconincreaseinteractionrange) is not "false".  
  
**Active version:** From `1.0.0` to `Current`  
**Type:** `double`  
**Default value:** `0.3`  
**Suggests options:** `0.3`  
**Categories:** `QCA`, `FEATURE`, `EXPERIMENTAL`  

## boneMealDoubleSmallFlowers
Allow players to use bone meal to double the small flowers.

**Active version:** From `1.1.0` to `Current`  
**Type:** `boolean`  
**Default value:** `false`  
**Suggests options:** `false`, `true`  
**Categories:** `QCA`, `SURVIVAL`, `FEATURE`, `EXPERIMENTAL` 

## breakDripleafKeepStem
Changes the behaviour of the stems when top break.  
Now, when the top dripleaf break, the top stem will become dripleaf and keep other stems.  
  
**Active version:** From `1.0.4` to `Current`  
**Type:** `boolean`  
**Default value:** `false`  
**Suggests options:** `false`, `true`  
**Categories:** `QCA`, `FEATURE`, `EXPERIMENTAL`  

## commandTpPlayer
The /tp command, but only can teleport a player to another player.  
  
**Active version:** From `1.0.3` to `1.1.0`  
**Type:** `String`  
**Default value:** `false`  
**Suggests options:** `ops`, `0`, `1`, `2`, `3`, `4`, `false`, `true`  
**Categories:** `QCA`, `COMMAND`  

## commandTpPos
The /tp command, but only can teleport an entity to a position.  
  
**Active version:** From `1.0.0` to `1.1.0`  
**Type:** `String`  
**Default value:** `false`  
**Suggests options:** `ops`, `0`, `1`, `2`, `3`, `4`, `false`, `true`  
**Categories:** `QCA`, `COMMAND`  

## crafterLimitation
Allow players to limit recipes by placing (glow) item frame at the top or renaming it to valid Limitations.  
At this time, the crafter only supports recipes that result in items within the (glow) item frame or items that match the Limitation in the custom name.  
Limitation syntax can be found in the [Document](./qca-limitations.md#syntax).  
Note that the "top" side means the side has nine-square grid.  
  
**Active version:** From `1.0.2` to `Current`  
**Type:** `String`  
**Default value:** `dsabled`  
**Suggests options:** `disabled`，`itemFrame`，`customName`，`itemFrame,customName`  
**Categories:** `QCA`, `SURVIVAL`, `FEATURE`, `EXPERIMENTAL`  

## easyHopperLimitation
Allow players to limit only certain types of items by placing (glow) item frames at the top or renaming it to valid Limitations.  
Limitation syntax can be found in the [Document](./qca-limitations.md#syntax).  
  
**Active version:** From `1.0.1` to `Current`  
**Type:** `String`  
**Default value:** `disabled`  
**Suggests options:** `disabled`，`itemFrame`，`customName`，`itemFrame,customName`  
**Categories:** `QCA`, `SURVIVAL`, `FEATURE`, `EXPERIMENTAL`  

## itemsCanPassThroughChains
Allow item entities pass through chains.  
For other entities, there is no difference between the collision box and when the rule is closed.  
  
**Active version:** From `1.0.0` to `Current`  
**Type:** `boolean`  
**Default value:** `false`  
**Suggests options:** `false`, `true`  
**Categories:** `QCA`, `FEATURE`, `EXPERIMENTAL`  

## pvpDoNotDamageEquipment
Make equipments not damage during PVP.  
  
**Active version:** From `1.0.5` to `Current`  
**Type:** `boolean`  
**Default value:** `false`  
**Suggests options:** `false`, `true`  
**Categories:** `QCA`, `PVP`, `SURVIVAL`, `FEATURE`, `EXPERIMENTAL`  

## pvpDoNotDamageWeapon
Make weapon not damage during PVP.  
  
**Active version:** From `1.0.5` to `Current`  
**Type:** `boolean`  
**Default value:** `false`  
**Suggests options:** `false`, `true`  
**Categories:** `QCA`, `PVP`, `SURVIVAL`, `FEATURE`, `EXPERIMENTAL`  

## qcaDebugLog
Prints more debug info in the debug log.  
  
**Active version:** From `1.0.4.4` to `Current`  
**Type:** `boolean`  
**Default value:** `false`  
**Suggests options:** `false`, `true`  
**Categories:** `QCA`, `FEATURE`, `EXPERIMENTAL`  

## repairCostMultiplier
Sets the multiplier in calculating next repair cost.  
  
**Active version:** From `1.0.4` to `Current`  
**Type:** `double`  
**Default value:** `2.0`  
**Suggests options:** `2.0`  
**Categories:** `QCA`, `SURVIVAL`, `FEATURE`  

## tallPlantShearToSmall
Allow players to shear off tall plants or craft them with shears to create their smaller "variants."  
Note that these "variants" are purely for in-game use and have no relation to real-life plants.  
  
**Active version:** From `1.0.0` to `Current`  
**Type:** `String`  
**Default value:** `disable`  
**Suggests options:** `disable`, `enable`, `grasses`, `dripleaf`, `flowers`, `grasses,dripleaf`, `grasses,flowers`, `dripleaf,flowers`  
**Categories:** `QCA`, `SURVIVAL`, `FEATURE`, `EXPERIMENTAL`  

## tooExpensiveLevel
Changes the repair cost level that can trigger the "Too Expensive!" tip in anvil.  
  
**Active version:** From `1.0.0` to `Current`  
**Type:** `int`  
**Default value:** `39`  
**Suggests options:** `-1`, `39`  
**Categories:** `QCA`, `SURVIVAL`, `FEATURE`  
