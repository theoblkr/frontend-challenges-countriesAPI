<template>
  <header id="header">
    <router-link
      id="sectionGoBack"
      :to="{ name: 'Home'}"
    >
      <v-icon
        id="icon"
        name="arrow-left"
        :style="darkActivated ? 'color: white; stroke: black;' : 'color: inherit;'"
      />
      <span :style="darkActivated ? 'color: white;' : 'color: inherit;'">Back</span>
    </router-link>
  </header>
</template>

<script>
  export default {
    name: 'HeaderCountryDetail',
    props: {darkActivated: Boolean},
  }
</script>

<style lang='scss' scoped>
#header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    margin-left: 4rem;
}
#sectionGoBack {
    padding: 8px 40px;
    border: 1px solid grey;
    border-radius: 6px;
    #icon {
        margin-right: 10px;
    }
    &:hover {
        cursor: pointer;
    }
}
</style>
