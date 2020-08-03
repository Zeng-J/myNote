
// Module模式
var basketModule = (function() {
    // 购物车（私有属性）
    var basket = [];
  
  	// 私有方法
  	function calculateTotal(count) {
      var total = 0;
      while(count--) {
        total += basket[count].price;
      }
      return total;
    }

    // 返回一个暴露的公有对象
    return {
      	// -----公有属性-----
      	name: 'basket',
      
      	// -----公有方法-----
        // 添加商品到购物车
        addItem(value) {
            basket.push(value);
        },

        // 返回购物车里的商品数
        getItemCount() {
            return basket.length;
        },

        // 获取购物车里所有商品总价
        getTotal() {
            var itemCount = this.getItemCount();
            return calculateTotal(itemCount);
        }
    }
})()

basketModule.addItem({
    name: '烤鸡腿',
    price: 5,
});
basketModule.addItem({
    name: '铁板鱿鱼',
    price: 10,
});
console.log(`商品共${basketModule.getItemCount()}件`); // 商品共2件
console.log(`应付${basketModule.getTotal()}元`); // 应付15元

// 引入混入
var basketModule = (function(wallet) {
    // 购物车
    var basket = [];

    // 返回一个暴露的公有对象
    return {
        // 判断自己的钱包够不够钱付款
        canPaying() {
            return wallet >= this.getTotal();
        },

        // 添加商品到购物车
        addItem(value) {
            basket.push(value);
        },

        // 返回购物车里的商品数
        getItemCount() {
            return basket.length;
        },

        // 获取购物车里所有商品总价
        getTotal() {
            var itemCount = this.getItemCount(),
                total = 0;

            while(itemCount--) {
                total += basket[itemCount].price;
            }

            return total;
        }
    }
})(10)

basketModule.addItem({
    name: '烤鸡腿',
    price: 5,
});
basketModule.addItem({
    name: '铁板鱿鱼',
    price: 10,
});
console.log(`商品共${basketModule.getItemCount()}件`); // 商品共2件
console.log(`应付${basketModule.getTotal()}元`); // 应付15元

console.log(basketModule.canPaying() ? '足够付款' : '不够钱付款') // 不够钱付款