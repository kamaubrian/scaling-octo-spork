<template>
    <div class="col-sm-6 col-sm-offset-3">
      <h1>Get a Free Chuck Norris Quote</h1>
      <button class="btn btn-primary" >Get Quote</button>
      <div class="quote-area">
          <h2><blockquote>{{ quote }}</blockquote></h2>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      quote: ''
    }
  },
  methods: {
    getQuote () {
      this.$http.get('', (data) => {
        this.quote = data
      })
        .error((err) => console.log(err))
    }
  }
}
</script>
