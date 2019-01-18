export function isType(data) {
  let type = {
    '[object String]': 'String',
    '[object Array]': 'Array',
    '[object Object]': 'Object',
    '[object Number]': 'Number',
    '[object Boolean]': 'Boolean'
  };
  return type[Object.prototype.toString.call(data)]
}

export function arrayMethods() {
  let arrayProto = Array.prototype;
  let arrayMethods = Object.create(arrayProto);

  [
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
        let original = arrayProto[item];
        let args = Array.from(arguments);
        original.apply(this, args);
      },
    })
  })
  return arrayMethods
}

export function augment(target, src) {
  target.__proto__ = src
}