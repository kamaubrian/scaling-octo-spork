<template>
  <div id="app-2">
    <span v-bind:title="message">
      Hover Your Mouse over me for a few seconds
      to see my dynamically bound title!
    </span>
  </div>
</template>

<script>
export default {
  name: 'app2'
}
</script>

<style>
  #app2{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
