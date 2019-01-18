import {isType, arrayMethods, augment} from './utils'

export function observe(data) {
  return new Observer(data)
}

class Observer {
  constructor(value) {
    if (isType(value) === 'Array') {
      augment(value, arrayMethods());
      this.observeArray(value)
    }

    if (isType(value) === 'Object') {
      this.observeObject(value)
    }
  }

  //针对对象
  observeObject(value) {
    let keys = Object.keys(value);
    keys.forEach((item) => {
      let itemValue = value[item];
      defineObserve(value, item, itemValue);
    })
  }

  //针对数组
  observeArray(items) {
    items.forEach((item, index) => {
      defineObserve(items, index, item);
    });
  }
}

function defineObserve(obj, key, val) {
  let valueType = isType(val);
  if (valueType === 'Array' || valueType === 'Object') {
    observe(val)
  }
  if(isType(obj) === 'Object'){
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        return val
      },
      set: function reactiveSetter(newVal) {
        console.log(newVal);
        val = newVal;
      }
    })
  }
}


