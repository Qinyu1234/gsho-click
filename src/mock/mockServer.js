
/*
 利用mockjs提供mock接口
*/
import Mock from 'mockjs'
import recommends from './recommends.json'
import floors from './floors.json'
import navtype from './navtype.json'
import banners from './banners.json'
import search  from './search.json'
import detail  from './detail.json'

//mock不需要暴露对象

Mock.mock('/mock/recommends',{code:200,data:recommends})
Mock.mock('/mock/floors',{code:200,data:floors})
Mock.mock('/mock/categoryList',{code:200,data:navtype})
Mock.mock('/mock/bannerList',{code:200,data:banners})
Mock.mock('/mock/searchList',{code:200,data:search})
Mock.mock('/mock/detail/:skuId',{code:200,data:detail})