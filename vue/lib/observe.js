export function observe(data) {
  return new Observer(data)
}


var arrayProto = Array.prototype
var arrayMethods = Object.create(arrayProto)

;[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach(function (item) {
  Object.defineProperty(arrayMethods, item, {
    value: function mutator(val) {
      //缓存原生方法，之后调用
      console.log(val);
      var original = arrayProto[item]
      var args = Array.from(arguments)
      original.apply(this, args)
       console.log(this);
    },
  })
})


function isType(data) {
  let type = {
    '[object String]': 'String',
    '[object Array]': 'Array',
    '[object Object]': 'Object',
    '[object Number]': 'Number',
    '[object Boolean]': 'Boolean'
  };
  return type[Object.prototype.toString.call(data)]
}


class Observer {
  constructor(value) {
    if (isType(value) === 'Array') {
      augment(value, arrayMethods);
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

function augment(target, src) {
  target.__proto__ = src
}
