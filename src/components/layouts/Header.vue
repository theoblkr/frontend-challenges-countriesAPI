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
    align-items: center;
    padding: 2rem 4rem;
    margin-bottom: 4rem;
    span:first-child{
      font-size: 20px;
      font-weight: 600;
    }
    &::after{
      background: linear-gradient(to right, hsl(200, 15%, 8%) 0%, hsl(0, 0%, 100%) 100%);
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      left: 0;
      right: 0;
      top: 90px;
    }
}
@media screen and (max-width: 700px) {
  #header {
    padding: 2rem 1rem;
  }
}
#icon {
    margin-right: 10px;
}
#sectionDarkMode:hover {
    cursor: pointer;
}
</style>
