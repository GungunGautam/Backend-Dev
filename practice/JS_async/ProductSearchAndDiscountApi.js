const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/product")) {
    const parsedUrl = url.parse(req.url, true);
    const { name, price, discount } = parsedUrl.query;

    const originalPrice = Number(price);
    const discountPercent = Number(discount);

    const finalPrice =
      originalPrice - (originalPrice * discountPercent) / 100;

    const logData = `Product: ${name}, Price: ${originalPrice}, Discount: ${discountPercent}%, Final Price: ${finalPrice}\n`;

    fs.appendFile("searches.txt", logData, (err) => {
      if (err) console.error(err);
    });

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <body>
          <div class="card">
            <h2>Product Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Original Price:</strong> ₹${originalPrice}</p>
            <p><strong>Discount:</strong> ${discountPercent}%</p>
            <p class="price">Final Price: ₹${finalPrice}</p>
          </div>
        </body>
      </html>
    `);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});
