<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  margin: 0 auto;
  height: 100%;
}
section {
  padding-left: 60px;
  padding-right: 60px;
  @media (max-width: 760px) {
      padding-left: 20px;
      padding-right: 20px;
  }
}

.container{
  margin: 0 auto;
  max-width: 1280px;
}
.text{
  font-family: 'OpenSans-Regular';
}
.text_bold{
  font-family: 'OpenSans-SemiBold';
}
</style>
