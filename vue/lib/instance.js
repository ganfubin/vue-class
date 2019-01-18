import {observe} from './observe'

//初始化data
export function initData(vm, data){
  if(data instanceof Function){
    data = data();
  }
  observe(data);
  vm.$data = data


}

//初始化computed
export function initComputed(vm, computed){

}

//初始化methods
export function initMethods(vm, computed){

}