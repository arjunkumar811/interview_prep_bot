## 🤔 What is gRPC?

gRPC (**g**oogle **R**emote **P**rocedure **C**all) is a way for services to call functions on each other directly, as if they were local functions — instead of manually building REST endpoints.

```
REST                                  gRPC
────                                  ────
GET /users/1                          userService.getUser(1)
   ↓                                     ↓
Parse JSON manually                   Returns typed object directly
```

## How gRPC Works

1. You define your API in a `.proto` file (Protocol Buffers)
2. gRPC generates client and server code in your language automatically
3. Data is sent as compact **binary** (Protocol Buffers), not JSON text

```protobuf
service UserService {
  rpc GetUser (UserRequest) returns (UserResponse);
}

message UserRequest {
  int32 id = 1;
}

message UserResponse {
  string name = 1;
  int32 age = 2;
}
```

## REST vs gRPC

| REST | gRPC |
|---|---|
| JSON (text, human-readable) | Protocol Buffers (binary, compact) |
| HTTP/1.1 | HTTP/2 (supports streaming) |
| Widely supported by browsers | Needs special client libraries (limited browser support) |
| Simpler to debug (readable payloads) | Faster, smaller payloads |
| Great for public APIs | Great for internal microservice-to-microservice calls |

## Streaming

gRPC supports 4 modes, including streaming — REST cannot easily do this natively:

```
Unary:            Client → 1 request  → Server → 1 response
Server Streaming: Client → 1 request  → Server → many responses (e.g. live stock prices)
Client Streaming: Client → many requests → Server → 1 response (e.g. file upload chunks)
Bidirectional:    Client ⇄ Server, both streaming continuously (e.g. live chat)
```

## Real World Example

Internally, Netflix and Google use gRPC extensively for service-to-service communication — fast, typed, and efficient between hundreds of microservices — while still exposing REST or GraphQL to the public-facing apps.

## 🧠 Mini Quiz

1. What format does gRPC use to send data (instead of JSON)?
2. What HTTP version does gRPC rely on to support streaming?
3. Would you use gRPC or REST for a public API consumed by browsers? Why?

---