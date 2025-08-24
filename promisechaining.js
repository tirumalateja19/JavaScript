// const cart = [];
// createOrder(cart)
//   .then((orderId) => {
//     console.log(orderId);
//     return orderId;
//   })
//   .catch(() => console.error("Order not created"))
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentInfo) => console.log(paymentInfo))
//   .catch((err) => console.error(err.message))
//   .then(() => console.log("No matter what this will run definetly"));

createOrder(["Shirt"])
  .then((orderId) => {
    console.log("Order ID:", orderId);
    return proceedToPayment(orderId); //better to return this because without cart you cannot procced to payment
  })
  .catch((err) => {
    console.error("Caught in first catch:", err.message);
    throw err; // ✅ rethrowing to stop further .then execution
  })
  .then((paymentInfo) => {
    console.log("Payment Info:", paymentInfo); // 🚫 Skipped
  })
  .catch((err) => {
    console.error("Caught in second catch:", err.message); // ✅ Handles rethrown error
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
    return "Payment successful";
  }
  return "Payment failed";
}
function ValidateCart(cart) {
  return cart.length > 0;
}
