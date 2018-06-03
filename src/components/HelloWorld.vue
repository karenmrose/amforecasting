<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<router-link tag="li" to="/users">
		<a>Add new user</a>
	</router-link>
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return { msg: 'A&M Forecasting System' }
	}
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
