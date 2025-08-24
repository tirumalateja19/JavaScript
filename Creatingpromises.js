const cart = ["shirts", "jeans", "trousers"];
const promise = createOrder(cart);
promise
  .then((OrderId) => console.log(OrderId))
  .catch((err) => console.error(err.message));

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!ValidateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const OrderId = "12343";
    if (OrderId) {
      setTimeout(() => resolve(OrderId), 3000);
    }
  });
  return pr;
}
function ValidateCart(cart) {
  return true;
}
