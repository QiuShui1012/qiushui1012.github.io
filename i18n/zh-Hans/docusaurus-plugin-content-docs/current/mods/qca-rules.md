---
sidebar_position: 1
---

# Qualia Carpet Addition - 规则  

## 信标可提升玩家交互范围 (beaconIncreaseInteractionRange)  
允许信标当玩家在范围内时为其提升交互范围。  
  
**存在版本：** 从`1.0.4`到`现版本`  
**类型：** `boolean`  
**默认值：** `false`  
**建议值：** `false`，`true`  
**类别：** `QCA`，`FEATURE`，`EXPERIMENTAL`  

## 信标可提升玩家交互范围值 (beaconIncreaseInteractionRangeValue)  
设置当规则[“信标可提升玩家交互范围”](#信标可提升玩家交互范围-beaconincreaseinteractionrange)不为“false”时，信标计算增加的交互范围时使用的值。  
  
**存在版本：** 从`1.0.0`到`现版本`  
**类型：** `double`  
**默认值：** `0.3`  
**建议值：** `0.3`  
**类别：** `QCA`，`FEATURE`，`EXPERIMENTAL`  

## 破坏大型垂滴叶保留茎 (breakDripleafKeepStem)  
更改大型垂滴叶茎在顶部被破坏时的行为。  
现在，当顶部的垂滴叶被破坏时，最靠上的茎会变成垂滴叶并保持其它茎不被破坏。  
  
**存在版本：** 从`1.0.4`到`现版本`  
**类型：** `boolean`  
**默认值：** `false`  
**建议值：** `false`，`true`  
**类别：** `QCA`，`FEATURE`，`EXPERIMENTAL`  

## /tpplayer 命令 (commandTpPlayer)  
/tp 命令，但是只能将一个玩家传送到另一个玩家。  
  
**存在版本：** 从`1.0.3`到`现版本`  
**类型：** `String`  
**默认值：** `false`  
**建议值：** `ops`，`0`，`1`，`2`，`3`，`4`，`false`，`true`  
**类别：** `QCA`，`COMMAND`  

## /tppos 命令 (commandTpPos)  
/tp 命令，但是只能将一个实体传送到一个坐标。  
  
**存在版本：** 从`1.0.0`到`现版本`  
**类型：** `String`  
**默认值：** `false`  
**建议值：** `ops`，`0`，`1`，`2`，`3`，`4`，`false`，`true`  
**类别：** `QCA`，`COMMAND`  

## 合成器配方可限制 (crafterRecipeCanRestrict)  
允许玩家通过在合成器顶部放置（荧光）物品展示框来限制配方。  
此时合成器仅支持结果为（荧光）物品展示框内物品的配方。  
注意此处的“顶部”指有九宫格的面。  
  
**存在版本：** 从`1.0.2`到`现版本`  
**类型：** `boolean`  
**默认值：** `false`  
**建议值：** `false`，`true`  
**类别：** `QCA`，`SURVIVAL`，`FEATURE`，`EXPERIMENTAL`  

## 更简易的漏斗限类 (easierHopperRestriction)  
允许玩家通过重命名漏斗使其仅吸取某类物品。  
支持长ID（“namespace:path”为物品，“#namespace:path”为标签）以及短ID（前文提到的“path”和“#path”部分，仅支持命名空间为minecraft）。  
  
**存在版本：** 从`1.0.1`到`现版本`  
**类型：** `boolean`  
**默认值：** `false`  
**建议值：** `false`，`true`  
**类别：** `QCA`，`SURVIVAL`，`FEATURE`，`EXPERIMENTAL`  

## 物品可穿过铁链 (itemsCanPassThroughChains)  
允许物品实体穿过铁链。对于其它实体，碰撞箱与关闭该规则时无差异。  
  
**存在版本：** 从`1.0.0`到`现版本`  
**类型：** `boolean`  
**默认值：** `false`  
**建议值：** `false`，`true`  
**类别：** `QCA`，`FEATURE`，`EXPERIMENTAL`  

## QCA Debug日志 (qcaDebugLog)  
向debug日志打印更多debug信息。  
  
**存在版本：** 从`1.0.4.4`到`现版本`  
**类型：** `boolean`  
**默认值：** `false`  
**建议值：** `false`，`true`  
**类别：** `QCA`，`FEATURE`，`EXPERIMENTAL`  

## 累计惩罚乘数 (repairCostMultiplier)  
设置计算下个累计惩罚的乘数。  
  
**存在版本：** 从`1.0.4`到`现版本`  
**类型：** `double`  
**默认值：** `2.0`  
**建议值：** `2.0`  
**类别：** `QCA`，`SURVIVAL`，`FEATURE`  

## 高植物可剪成其小型变种 (tallPlantShearToSmall)  
允许玩家将高植物剪成或与剪刀制作为它们的小型“变种”。  
注意此处的“变种”仅为游戏内相似用途的合并，与现实中的植物无关系。  
  
**存在版本：** 从`1.0.0`到`现版本`  
**类型：** `String`  
**默认值：** `disable`  
**建议值：** `disable`，`enable`，`grasses`，`dripleaf`，`flowers`，`grasses,dripleaf`，`grasses,flowers`，`dripleaf,flowers`  
**类别：** `QCA`，`SURVIVAL`，`FEATURE`，`EXPERIMENTAL`  

## “过于昂贵”累计惩罚等级 (tooExpensiveLevel)  
更改在铁砧中触发“过于昂贵”提示的累计惩罚等级。  
  
**存在版本：** 从`1.0.0`到`现版本`  
**类型：** `int`  
**默认值：** `39`  
**建议值：** `-1`，`39`  
**类别：** `QCA`，`SURVIVAL`，`FEATURE`  
