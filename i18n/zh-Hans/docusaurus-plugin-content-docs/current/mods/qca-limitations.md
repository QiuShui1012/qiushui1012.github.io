---
sidebar_position: 2
---

# Qualia Carpet Addition - 限制谓词
上次更新于 `1.2.2` 版本。

限制谓词（Limitations）是一个简单的类脚本语言，基于Java语法和Minecraft标识符/资源路径系统。
## 语法
谓词支持以下元素：
- 长ID（`namespace:path`为物品ID，`#namespace:path`为标签ID）
- 与Java语法基本一致的`!`、`&`、`|`、`()`

符号默认短路且不支持双符号短路，完全按照Java语法优先级（`()` -> `!` -> `&` -> `|` -> ID）。  
谓词不是空格敏感的。  
若某个ID不存在/写错了，则该ID会被舍弃，但是其余部分不会受到影响。  

## 示例
1. `!minecraft:stick` - 会使其仅通过木棍以外的物品。
2. `#minecraft:planks | #minecraft:logs | minecraft:oak_sapling` - 会使其仅通过木板、原木和橡木树苗。
3. `!(#minecraft:planks & #minecraft:logs) & minecraft:boots` - 原版情况下由于没有minecraft:boots物品，该谓词会使其不通过任何物品。