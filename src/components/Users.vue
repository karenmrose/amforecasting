<template>
    <div>
        <h1>Users</h1>
        <label for="email_address">Email Address</label>
        <input type="text" name="email_address" id="email_address" /><br />
        <label for="first_name">First Name</label>
        <input type="text" name="first_name" id="first_name" /><br />
        <label for="last_name">Last Name</label>
        <input type="text" name="last_name" id="last_name" /><br />
        <button v-on:click="counter += 1">Submit</button>
    </div>
</template>

<script>
export default { name: 'Users' }
</script>

<style scoped>

</style>
