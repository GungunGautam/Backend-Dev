function checkOrderStatus(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof orderId === "number") {
        resolve("Order Shipped");
      } else {
        reject("Invalid Order ID");
      }
    }, 1000);
  });
}

async function trackOrder(orderId) {
  try {
    const result = await checkOrderStatus(orderId);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

trackOrder(123);      
trackOrder("ABC");    