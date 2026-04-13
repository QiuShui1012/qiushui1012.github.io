---
title: Qualia Carpet Addition - 限制谓词
description: 用于 crafterLimitation 和 easyHopperLimitation 规则的限制谓词
order: 2
---

# Qualia Carpet Addition - 限制谓词

上次更新于 `2.0.0` 版本。

限制谓词（Limitations）是一个简单的类脚本语言，基于Java语法和Minecraft标识符/资源路径系统。

其已于 `2.0.0` 版本与 `crafterLimitation` 和 `easyHopperLimitation` 规则一同移除。

## 语法

谓词支持以下元素，且空格不敏感：

- 长ID（`namespace:path`为物品ID，`#namespace:path`为标签ID）
- 与Java语法基本一致的`!`、`&`、`|`、`()`

符号默认短路且不支持双符号短路，完全按照Java语法优先级应用（`()` -> `!` -> `&` -> `|` -> ID）。

若某个ID不存在/有误，则该ID会被舍弃，其余部分仍然保留。

## 示例
1. `!minecraft:stick`  
   仅允许除木棍以外的物品通过。
2. `#minecraft:planks | #minecraft:logs | minecraft:oak_sapling`  
   仅允许木板、原木和橡木树苗通过。
3. `#minecraft:planks & #minecraft:logs & minecraft:oak_sapling`  
   若 `#minecraft:planks` 和 `#minecraft:logs` 标签中包含橡木树苗，则允许橡木树苗通过；  
   反之则不允许任何物品通过。