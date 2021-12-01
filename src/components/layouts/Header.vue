<template>
  <header id="header">
    <span :style="darkActivated ? 'color: white;' : 'color: inherit;'">Where is the world ?</span>
    <div
      id="sectionDarkMode"
      @click="onChangeMode(darkActivated)"
    >
      <v-icon
        id="icon"
        name="moon"
        :style="darkActivated ? 'color: white; stroke: black;' : 'color: inherit;'"
      />
      <span :style="darkActivated ? 'color: white;' : 'color: inherit;'">Dark Mode</span>
    </div>
  </header>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'Header',
    computed: mapState({
      darkActivated: state => state.mode.darkActivated
    }),
    methods: {
      ...mapActions({
        onChangeMode: 'mode/onChangeMode'
      })
    }
  }
</script>

<style lang='scss' scoped>
#header {
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid grey;
    span:first-child{
      font-size: 20px;
      font-weight: 600;
    }
}
#icon {
    margin-right: 10px;
}
#sectionDarkMode:hover {
    cursor: pointer;
}
</style>
