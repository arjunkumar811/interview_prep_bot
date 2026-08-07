⏳ **Estimated Learning Time:** 10-15 min

# 📚 Authentication Revision Roadmap

```
Authentication
│
├── 1. What is Authentication?
├── 2. Authentication vs Authorization
├── 3. Sessions
├── 4. Cookies
├── 5. JWT (JSON Web Token)
├── 6. Access Token & Refresh Token
├── 7. Password Hashing (bcrypt)
├── 8. Authentication Flow
├── 9. Protecting Routes
├── 10. Role Based Authentication
├── 11. Best Practices
├── 12. Common Interview Questions
├── 13. Build Complete Auth API
```

---

# Lesson 1 — What is Authentication?

Imagine you own a house.

A stranger knocks.

You ask:

> **"Who are you?"**

He shows his ID card.

You verify it.

If it's correct, you let him in.

This process is called **Authentication**.

Authentication = **Proving your identity**

---

## Real-world examples

### Gmail

```
Email
Password
```

Google checks

```
Is this password correct?
```

If yes

```
Welcome Arjun
```

You are authenticated.

---

### ATM

Insert card

↓

Enter PIN

↓

Bank checks PIN

↓

Money allowed

PIN = Authentication

---

### College

Teacher asks

```
Show your ID card
```

ID verified

↓

You enter classroom.

---

# Technical Definition

Authentication is the process of verifying that a user is really who they claim to be.

Example

```
POST /login

{
   "email":"arjun@gmail.com",
   "password":"123456"
}
```

Server checks database.

If correct

```
Authenticated
```

Else

```
Invalid credentials
```

---

# How Authentication Works

```
User

Email
Password

      │
      ▼

Backend

Check Database

      │
      ▼

Correct?

     Yes
      │
      ▼

Generate Token

      │
      ▼

Return Token

      │
      ▼

User Logged In
```

---

# What happens inside the backend?

### Step 1

User sends

```json
{
  "email": "arjun@gmail.com",
  "password": "123456"
}
```

---

### Step 2

Backend searches database

```javascript
const user = await User.findOne({
    email: req.body.email
});
```

---

### Step 3

Compare password

```javascript
if(password === user.password){
    Login Success
}
```

> ❌ We never actually store plain passwords like this in a real application. Later we'll use **bcrypt** to hash passwords before storing them.

---

### Step 4

Backend creates a token (usually JWT)

```
eyJhbGc...
```

---

### Step 5

Returns it

```json
{
  "token":"eyJhbGc..."
}
```

---

### Step 6

Frontend saves it

```
Local Storage

OR

Cookie
```

---

### Step 7

Every future request

```
Authorization

Bearer eyJhbGc...
```

---

Backend verifies the token.

If valid

```
Access Granted
```

Otherwise

```
401 Unauthorized
```

---

# Complete Authentication Flow

```
        Register

User ─────────────► Backend

                     │
                     ▼

             Save User in DB

                     │
                     ▼

------------------------------

        Login

User ─────────────► Backend

Email + Password

                     │
                     ▼

             Check Database

                     │

            Password Correct?

               Yes
                │
                ▼

          Generate JWT

                │
                ▼

Return Token

                │
                ▼

Store Token

                │
                ▼

Future Requests

Authorization: Bearer Token

                │
                ▼

Backend verifies Token

                │
                ▼

Protected Route Access
```

---

# Where is Authentication Used?

Every major application:

* ✅ Instagram
* ✅ Facebook
* ✅ WhatsApp Web
* ✅ Amazon
* ✅ Flipkart
* ✅ Netflix
* ✅ Gmail
* ✅ Banking apps

---

# Authentication Methods

| Method              | Used Today? | Example                        |
| ------------------- | ----------- | ------------------------------ |
| Username + Password | ✅           | Most websites                  |
| OTP                 | ✅           | Phone login                    |
| OAuth               | ✅           | Sign in with Google            |
| JWT                 | ✅           | REST APIs                      |
| Sessions            | ✅           | Traditional web apps           |
| API Keys            | ✅           | Server-to-server communication |
| Biometric           | ✅           | Face ID, Fingerprint           |

---

# Authentication vs Authorization

This is one of the **most common interview questions**.

| Authentication   | Authorization                |
| ---------------- | ---------------------------- |
| Who are you?     | What are you allowed to do?  |
| Happens first    | Happens after authentication |
| Login            | Permission checking          |
| Email & Password | Admin/User roles             |

### Example

You log in to an admin dashboard.

**Authentication**

```
Are you Arjun?
```

✔ Yes

**Authorization**

```
Are you an Admin?
```

✔ Yes → Access granted

❌ No → Access denied

---

# Interview Question

**Q: Can a user be authenticated but not authorized?**

✅ **Yes.**

Example:

* You successfully log in to a banking app (authenticated).
* You try to access the admin dashboard.
* You are not an admin, so access is denied (not authorized).

---

# Quick Revision

**Authentication**

* Verifies identity.
* Usually starts with login.
* Often uses JWT, sessions, or OAuth.
* Issues a token or session after successful verification.

**Authorization**

* Verifies permissions.
* Decides what authenticated users are allowed to access.
* Commonly uses roles (Admin, User, Moderator) or permissions.

---

# Mini Quiz (Answer without looking back)

### Q1. What is Authentication?

A. Giving permissions

B. Verifying identity

C. Storing data

D. Creating database

---

### Q2. Authentication happens before Authorization.

True or False?

---

### Q3. Which header usually carries a JWT?

A. Content-Type

B. Authorization

C. Accept

D. Cookie

---

### Q4. After successful login, what is typically returned by the backend?

A. CSS file

B. HTML page

C. JWT Token (or session identifier)

D. Database

---

### Q5. Which HTTP status code is commonly returned when authentication fails?

A. 200

B. 201

C. 401

D. 500

---
