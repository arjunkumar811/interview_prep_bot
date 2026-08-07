⏳ **Estimated Learning Time:** 10-15 min

---

# 🚀 File Storage Review — Lesson 12

## 🤔 What is File Storage?

When you build a basic app, you save user data (name, email, age) in a database like MongoDB or PostgreSQL.

But what about their profile picture? What about a PDF document? What about a video?

**Rule #1 of Backend:** Never save large files directly inside your database! It makes the database incredibly slow and expensive.

Instead, we use dedicated File Storage systems.

---

# Simple Definition

> **File Storage involves saving user-uploaded files (images, videos, PDFs) in a secure location and saving only the URL/link to that file in your database.**

---

# How It Works

1. User uploads a profile picture (`image.jpg`).
2. Your Node.js server receives the file.
3. Your server uploads the file to a cloud storage service (like AWS S3).
4. AWS S3 gives you back a public URL: `https://mybucket.s3.amazonaws.com/image.jpg`
5. You save that **URL string** in your MongoDB database next to the user's name.

```json
{
  "name": "Alice",
  "email": "alice@gmail.com",
  "profilePictureUrl": "https://aws-s3-link.com/alice-pic.jpg"
}
```

---

# Popular Solutions

### 1. Local Storage (Not recommended for production)
Saving files inside a folder in your Node.js project (e.g., `/uploads`).
* **Why it's bad:** If your server crashes or restarts, you might lose the files. If you add a second server to handle more traffic, the files aren't shared between servers.

### 2. Cloud Storage (Industry Standard)
Services designed just to hold files securely and cheaply.
* **Amazon S3** (The absolute industry standard)
* **Cloudinary** (Great for images, automatically resizes them)
* **Google Cloud Storage**

---

# Handling Uploads in Node.js

To accept a file upload in Express, you can't just read `req.body` like you do for JSON text. Files are sent as "Multipart Form Data".

We use a middleware library called **Multer** to handle this.

```javascript
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' }); // temporary storage

app.post('/upload', upload.single('profilePic'), (req, res) => {
  // req.file contains the file info
  // You would then send req.file to AWS S3
  res.send('File uploaded!');
});
```

---

# 🧠 Mini Quiz (No Cheating!)

### 1. Where is the BEST place to store a user's uploaded 50MB video file?
A. Inside a PostgreSQL table
B. Inside a MongoDB document
C. In a Cloud Storage service like AWS S3
D. In the user's browser local storage

### 2. What do you actually save in your database when a user uploads an image?
A. The entire image file converted to text
B. The URL link pointing to where the image is stored in the cloud
C. A zip file of the image
D. The image's pixel colors

### 3. What Express middleware is commonly used to process incoming file uploads?
A. Mongoose
B. Multer
C. Socket.io
D. CORS

---