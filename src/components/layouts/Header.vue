<template>
  <header id="header">
      <span>Where is the world ?</span>
      <div @click="onChangeMode(darkActivated)" id="sectionDarkMode">
        <v-icon name="moon" id="icon"  :style="darkActivated ? 'color: white; stroke: black;' : 'color: inherit;'"/>
        <span>Dark Mode</span>
      </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Header',
    computed: mapState({
        darkActivated: state => state.mode.darkActivated
    }),
    methods: {
        onChangeMode: function () {
            this.$store.dispatch('mode/onChangeMode')
        },
    }
}
</script>

<style>
#header {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0rem;
}
#icon {
    margin-right: 10px;
}
#sectionDarkMode:hover {
    cursor: pointer;
}
</style>
