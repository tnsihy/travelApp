<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
      <city-alphabet></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './city/Header'
import CitySearch from './city/Search'
import CityList from './city/List'
import CityAlphabet from './city/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
