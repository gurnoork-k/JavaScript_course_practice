import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/payment.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-prac.js'

Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then((values)=>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
})

/*new Promise((resolve) => {
  loadProducts(()=>{
    resolve();
  });
}).then(()=>{
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});*/

//we wait for the products to finish loading and then go on to the next step
/*
loadProducts(()=>{
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/