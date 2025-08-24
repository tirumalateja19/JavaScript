const cart = ["Shirt"];
createOrder(cart)
  .then((orderId) => {
    return { paymentInfo: proceedToPayment(orderId), orderId };
  })
  .then(({ paymentInfo, orderId }) => {
    return { paymentInfo, orderId, cart };
  })
  .then((orderDetails) => {
    showOrderSummary(orderDetails);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!ValidateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const OrderId = "1243";
    if (OrderId) {
      setTimeout(() => resolve(OrderId), 3000);
    }
  });
  return pr;
}
function proceedToPayment(orderId) {
  if (orderId) {
    return true;
  }
  return false;
}
function ValidateCart(cart) {
  return cart.length > 0;
}
function showOrderSummary({ cart, orderId, paymentInfo }) {
  console.log("🛒 Cart:", cart);
  console.log("📦 OrderId:", orderId);
  console.log("💳 Payment Successful:", paymentInfo);
}
