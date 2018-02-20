<template>
  <div id="app-2">
    <p>{{ message }}</p>
    <button v-bind:onclick="reverseMessage">Reverse Message</button>
  </div>
</template>
<script>
export default{
  name: 'Input'
}
</script>
