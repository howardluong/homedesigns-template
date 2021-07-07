<template>
  <div class="navigation">
    <nuxt-link to="/" class="navlink">Home</nuxt-link>
    <nuxt-link to="/lytton" class="navlink">Lytton</nuxt-link>
    <nuxt-link to="/valleybrooke" class="navlink">Valleybrooke</nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .navigation {
        background-color: rgb(44, 116, 106);
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 20px;

        .navlink {
            color: #fff;
            margin: 0 15px;
        }
    }
</style>