# Button 按钮

## 基础按钮

基础按钮
:::demo

```vue
<template>
  <n-button></n-button>
</template>
```

:::

## 按钮类型 type

通过 type 属性设置按钮样式，可选：primary | secondary | text
:::demo

```vue
<template>
  <n-button></n-button>
  <n-button type="primary"></n-button>
  <n-button type="text"></n-button>
</template>
```

:::

## 按钮尺寸 size

通过 size 属性设置按钮样式，可选：small | medium | large
:::demo

```vue
<template>
  <n-button size="small">Small</n-button>
  <n-button>Medium</n-button>
  <n-button size="large">Large</n-button>
</template>
```

:::

## 禁用按钮 disabled

通过 disabled 属性禁用按钮
:::demo

```vue
<template>
    <n-button type="primary"          
      @click="confirm">Primary</n-button>
    <n-button type="primary" disabled 
      @click="confirm">Disabled</n-button>
</template>
<script setup>
  const confirm = () => console.log('confirm');
</script>
```

:::

## 块级按钮 block

通过 block 属性设置按钮为块级
:::demo

```vue
<template>
  <n-button type="primary" block>Confirm</n-button>
  <n-button block>Cancel</n-button>
</template>
```
