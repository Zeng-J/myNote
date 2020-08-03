// 对象字面量
var myModule = {
    data: {
        name: 'zj',
        age: 18,
    },
    setData(obj={}) {
        let data = JSON.parse(JSON.stringify(this.data));
        Object.assign(data, obj);
        this.data = data;
    },
    getData() {
        return this.data;
    }
}

myModule.setData({ age: 19 });

console.log(myModule.getData()); // { name: 'zj', age: 19 }