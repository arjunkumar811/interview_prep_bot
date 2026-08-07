⏳ **Estimated Learning Time:** 10-15 min

# What is MongoDB?

MongoDB is a NoSQL document database.

Instead of storing data inside rows and columns like SQL,

it stores data as documents.

Imagine Instagram.

Instead of

Users Table

ID | Name | Age

MongoDB stores

```json
{
  "_id": "1",
  "name": "Arjun",
  "age": 20,
  "followers": 1000
}
```

Each object is called a Document.

Many documents form a Collection.

Many collections form a Database.

Think of it like this

```
Database
│
├── users
│      ├── Document
│      ├── Document
│      └── Document
│
├── posts
│      ├── Document
│      └── Document
│
└── comments
```

---

# SQL vs MongoDB

| Feature | SQL | MongoDB |
|---|---|---|
| Structure | Database | Database |
| Table | Table | Collection |
| Row | Row | Document |
| Column | Column | Field |
| Schema | Schema Fixed | Flexible Schema |
| Relationships | JOIN | Reference / Aggregation |

Example SQL

Users

| ID | Name | Age |
|---|---|---|

MongoDB

```json
{
    "name":"Arjun",
    "age":20
}
```

Another document

```json
{
    "name":"Rahul",
    "age":22,
    "city":"Bangalore"
}
```

Notice

One document has

`city`

another doesn't.

MongoDB allows this.

---

# Database → Collection → Document

Example

College Database

Students Collection

```json
{
 name:"Arjun"
}

{
 name:"Rahul"
}
```

Teachers Collection

```json
{
 name:"John"
}
```

Hierarchy

```
Database

↓

Collection

↓

Document

↓

Fields
```

---

# BSON

MongoDB actually stores

JSON?

No.

It stores

BSON

Binary JSON

Why?

Because it supports

* Date
* ObjectId
* Binary
* Decimal
* Faster parsing

Example

```json
{
 "_id": ObjectId("...")
}
```

---

# CRUD Operations

## Create

Insert one

```javascript
db.users.insertOne({
    name:"Arjun",
    age:20
})
```

Insert many

```javascript
db.users.insertMany([
 {name:"A"},
 {name:"B"}
])
```

---

## Read

Find all

```javascript
db.users.find()
```

Find one

```javascript
db.users.findOne({
    name:"Arjun"
})
```

---

## Update

```javascript
db.users.updateOne(
    {name:"Arjun"},
    {
        $set:{
            age:21
        }
    }
)
```

---

## Delete

```javascript
db.users.deleteOne({
 name:"Arjun"
})
```

Delete many

```javascript
db.users.deleteMany({
 age:20
})
```

---

# Query Operators

Suppose

```json
[
 {name:"A", age:20},
 {name:"B", age:25},
 {name:"C", age:30}
]
```

Greater than

```javascript
db.users.find({
 age:{
   $gt:20
 }
})
```

Result

25

30

Less than

`$lt`

Greater than equal

`$gte`

Less than equal

`$lte`

Equal

`$eq`

Not equal

`$ne`

---

## Logical Operators

AND

```javascript
db.users.find({
 age:20,
 city:"Delhi"
})
```

OR

```javascript
db.users.find({
 $or:[
   {age:20},
   {city:"Delhi"}
 ]
})
```

IN

```javascript
db.users.find({
 age:{
   $in:[20,22]
 }
})
```

NOT IN

`$nin`

---

# Indexing

Without Index

Imagine

10 Million Users

Need

`name="Arjun"`

MongoDB checks

1

2

3

4

...

10,000,000

Very slow.

With Index

MongoDB creates something like a book index.

Arjun

→ Location

It jumps directly.

Create Index

```javascript
db.users.createIndex({
 name:1
})
```

Ascending

1

Descending

-1

Why indexes?

Without

`O(n)`

With

Approximately

`O(log n)`

---

# Aggregation Pipeline

Aggregation is like filtering data step by step.

Imagine

Orders

Need

* only completed
* total sales
* group by city

Aggregation does this.

Pipeline

```
Collection

↓

Match

↓

Group

↓

Sort

↓

Output
```

Example

```javascript
db.orders.aggregate([
 {
   $match:{
      status:"completed"
   }
 },
 {
   $group:{
      _id:"$city",
      total:{
         $sum:"$amount"
      }
   }
 }
])
```

Common stages

* `$match`
* `$group`
* `$sort`
* `$project`
* `$lookup`
* `$limit`
* `$skip`
* `$unwind`

---

# Relationships

Suppose

Users

Posts

Comments

How are they connected?

Two ways.

## Embedding

```json
{
 "name":"Arjun",
 "posts":[
   {
      "title":"Hello"
   },
   {
      "title":"Mongo"
   }
 ]
}
```

Everything inside one document.

Good when

* small
* always fetched together

---

## Referencing

User

```json
{
 "_id":1,
 "name":"Arjun"
}
```

Post

```json
{
 "title":"Hello",
 "userId":1
}
```

Like foreign keys.

Good for

Large applications.

---

# Embedding vs Referencing

**Embedding**

✅ Fast read

✅ Less queries

❌ Large documents

❌ Duplicate data

**Referencing**

✅ Normalized

✅ Scalable

✅ Easy updates

❌ Needs extra lookup

---

# Transactions

Imagine

Bank Transfer

A → B

Subtract

100

Add

100

If power fails after subtraction?

Money disappears.

Transaction ensures

Both happen

OR

Nothing happens

ACID properties

* Atomicity
* Consistency
* Isolation
* Durability

---

# Replication

One database server

Primary

Copies data to

Secondary

Secondary

Secondary

Benefits

* Backup
* High Availability
* Automatic Failover

---

# Sharding

Imagine

1 Billion Users

One server isn't enough.

Split data.

Shard 1

Users A-F

Shard 2

G-M

Shard 3

N-Z

Benefits

* Horizontal Scaling
* Faster queries
* Huge datasets

---

# MongoDB Atlas

Cloud-hosted MongoDB.

Provides

* Managed database
* Backups
* Monitoring
* Security
* Scaling
* Global clusters

Typical Express flow:

```
Express

↓

Mongoose

↓

MongoDB Atlas
```

---

# Common Interview Questions

### Q1. What is MongoDB?

A NoSQL document database that stores data in BSON documents instead of tables and rows.

---

### Q2. Difference between MongoDB and SQL?

SQL uses tables with a fixed schema. MongoDB uses collections of documents with a flexible schema.

---

### Q3. What is BSON?

Binary JSON used internally by MongoDB. It supports additional data types like ObjectId and Date.

---

### Q4. What is an Index?

A data structure that speeds up queries by allowing MongoDB to locate documents efficiently without scanning the entire collection.

---

### Q5. What is Aggregation?

A pipeline framework for processing documents to filter, group, sort, transform, and summarize data.

---

### Q6. Embedding vs Referencing?

Embedding: Store related data in the same document; best for one-to-few relationships and frequent joint reads.
Referencing: Store related documents separately and link them by ID; best for large or frequently changing relationships.

---

### Q7. What is Replication?

Maintaining copies of the same data on multiple servers for high availability and fault tolerance.

---

### Q8. What is Sharding?

Distributing data across multiple servers to scale storage and query performance horizontally.

---

### Q9. What are CRUD operations?

Create: `insertOne()`, `insertMany()`
Read: `find()`, `findOne()`
Update: `updateOne()`, `updateMany()`
Delete: `deleteOne()`, `deleteMany()`

---

### Q10. What is Mongoose?

Mongoose is an ODM (Object Data Modeling) library for Node.js that provides schemas, validation, middleware, and an object-oriented API to interact with MongoDB.

---

# MongoDB + Mongoose + Express Flow

```
Client
   │
   ▼
Express Route
   │
   ▼
Controller
   │
   ▼
Mongoose Model
   │
   ▼
MongoDB Atlas
```

Example:

```javascript
// Route
app.post("/users", createUser);

// Controller
async function createUser(req, res) {
  const user = await User.create(req.body);
  res.json(user);
}

// Model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
```

---

# Quick Revision (1-Minute)

* MongoDB is a NoSQL document database.
* Data is stored as BSON documents inside collections.
* CRUD = Create, Read, Update, Delete.
* Use query operators like `$gt`, `$lt`, `$in`, `$or`, and `$and`.
* Indexes speed up searches.
* Aggregation processes data in stages (`$match`, `$group`, `$sort`, etc.).
* Embedding stores related data together; Referencing links documents by IDs.
* Replication improves availability; Sharding improves scalability.
* Mongoose is the ODM commonly used with Node.js and Express.
