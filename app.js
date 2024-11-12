const express = require('express');
const fs = require('fs');
const Book = require('./models/Book');
const connectDB = require('./config/MongoDB.cjs'); // Đảm bảo kết nối MongoDB

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware để xử lý dữ liệu JSON

// Kết nối đến MongoDB


// Endpoint để thêm dữ liệu từ books.json vào MongoDB
app.post('/import-books', async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('./books.json', 'utf-8'));
    await Book.insertMany(data); // Thêm tất cả sách vào MongoDB
    res.status(201).send('Dữ liệu sách đã được thêm thành công');
  } catch (error) {
    res.status(500).send('Có lỗi xảy ra trong quá trình thêm dữ liệu sách');
  }
});
app.get('/books', async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).send('Có lỗi xảy ra trong quá trình lấy danh sách sách');
    }
  });
  
// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy trên http://localhost:${PORT}`);
});
