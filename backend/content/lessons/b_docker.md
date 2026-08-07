⏳ **Estimated Learning Time:** 10-15 min

---

# 🚀 Docker Review — Lesson 13

## 🤔 What is Docker?

Imagine you just built a beautiful Node.js app on your Macbook.
You send the code to your friend who has a Windows computer.
Your friend tries to run it, and it crashes. 

"But it works on my machine!" you cry.
Your friend has a different version of Node, missing environment variables, and didn't install MongoDB.

What if, instead of just sending the code, you could send your friend **your entire computer setup** wrapped in a tiny box? 

That's Docker.

---

# Simple Definition

> **Docker is a tool that packages your application and everything it needs to run (code, libraries, system tools) into a standardized unit called a Container.**

Because the container includes everything, it will run exactly the same on your laptop, your friend's laptop, and the production server.

---

# Real World Example

Think of physical shipping containers.

Before shipping containers, loading a ship was a nightmare. A sack of flour, a barrel of oil, a piano—they all had to be loaded differently.

Then we invented the standard metal shipping container. Now, the cranes and ships don't care what's inside. They just move the standard box.

Docker does this for software. The cloud server doesn't care if you wrote Node.js, Python, or Java. It just runs the Docker Container.

---

# Key Terms

### 1. Dockerfile
A text file with instructions on how to build your box. Like a recipe.
* "Start with a computer that has Node 18 installed."
* "Copy my code into it."
* "Run `npm install`."
* "Start the server."

### 2. Image
The actual packaged blueprint created by reading the Dockerfile. It's an immutable (unchangeable) snapshot of your app.

### 3. Container
A running instance of an Image. You can run 10 containers from 1 image. 

```
Dockerfile (Recipe)  ->  Image (The Cake Blueprint)  -> Container (The actual Cake you eat)
```

---

# Example Dockerfile for Node.js

```dockerfile
# Start from Node.js environment
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of your code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
```

---

# Why Use Docker?

✅ **No more "It works on my machine":** It works everywhere identically.
✅ **Easy Setup:** A new developer joins the team. Instead of spending 3 days installing databases and tools, they just run `docker-compose up` and everything starts instantly.
✅ **Microservices:** You can run a Node API in one container, a Python AI tool in another, and Redis in a third, all without them messing up your computer.

---

# 🧠 Mini Quiz (No Cheating!)

### 1. What problem does Docker primarily solve?
A. It makes your CSS look better.
B. The "It works on my machine" problem by standardizing environments.
C. It replaces Git for version control.
D. It writes your backend code for you.

### 2. What is a running instance of a Docker Image called?
A. A Dockerfile
B. A Container
C. A Virtual Machine
D. A Pod

### 3. What is a Dockerfile?
A. A database table
B. A text document containing all the commands to build an image
C. A secure password manager
D. A logging system

---