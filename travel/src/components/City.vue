<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :hotCities="hotCities" :cities="cities"></city-list>
      <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './city/Header'
import CitySearch from './city/Search'
import CityList from './city/List'
import CityAlphabet from './city/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data: function () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios
        .get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc: function (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted: function () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
