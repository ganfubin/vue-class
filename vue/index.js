import {initData, initComputed, initMethods } from './lib/instance'

export default class Vue {
  constructor(option){

    this.$option = option;
    let {data, computed, methods} = option;

    //初始化data
    data && (initData(this,data));

    //初始化computed
    computed && (initComputed(this, computed));

    //初始化methods
    computed && (initMethods(this, methods));

    console.log(this);
  }
}