<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list
        :hotCities="hotCities"
        :cities="cities"
        :letter="letter"
      ></city-list>
      <city-alphabet
        :cities="cities"
        @change="handleLetterChange"
      ></city-alphabet>
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
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios
        .get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc: function (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange: function (letter) {
      // 将字母传递到父级
      this.letter = letter
    }
  },
  mounted: function () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
