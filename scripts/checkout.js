import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/payment.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-prac.js'

async function loadPage(){
  try{
    //throw 'error1'; 
    await loadProductsFetch();

    await new Promise((resolve)=>{
      loadCart(()=>{
        resolve();
      });
    });
  }
  catch(error){
    console.log('unexpected error' + e);
  }
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage()
//'../images/async-shortcut.pdf' -> open this for shortcut
//why use async? it lets us wait for a promise to finish

/*Promise.all([
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
})*/

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