import Vue from '@vue'

window.newVue = new Vue({
  data(){
    return {
      name: "甘釜宾",
      company: "八戒财税",
      email: "1209711358@qq.com",
      tel: "13164498018",
      info: [1, 2, 3, 4, 5],
      talk: {
        a: 'aaaaa',
        b: {
          c: 'ccccc',
        },
        d: [5, 6, 7, 8, 9]
      },
      exp: [
        {
          f: 2
        }
      ]
    }
  },
  computed: {
    gf(){
      return "颜玲"
    },
    city(){
      return "重庆"
    }
  },
  mounted(){
    console.log(this);
  },
  methods: {
    getName(){
      console.log(this.name)
    },
    setTel(){
      this.tel = '13164498019'
    }
  }
});

newVue.$data.email = 'aaaa';
newVue.$data.info.push(6);
newVue.$data.talk.a = 'talk.a';
newVue.$data.talk.b.c = 'talk.b.c';

console.log(newVue)



