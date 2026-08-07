## 🤔 What is WebRTC?

**WebRTC (Web Real-Time Communication)** lets browsers send video, audio, and data **directly to each other**, without routing every frame through a server. It's what powers Google Meet, Discord video calls, and WhatsApp Web calls.

## Why Not Just Use WebSockets?

WebSockets are great for small messages (chat text), but streaming video/audio through a central server for every user would be incredibly expensive and add latency.

```
Without WebRTC (server relays everything):
User A ──video──► Server ──video──► User B
(Server pays huge bandwidth cost for every call)

With WebRTC (peer-to-peer):
User A ──video──────────────────► User B
(Direct connection, server only helps set it up)
```

## How a WebRTC Connection Gets Established

Two strangers can't just connect directly — they need to discover each other's network address first. This is where **signaling** and **ICE** come in.

```
User A                    Signaling Server                User B
   │                        (e.g. via WebSocket)              │
   ├──"I want to call"────────────►│                          │
   │                                │──"Incoming call"────────►│
   │◄────"Here's my connection info"│◄──"Here's mine too"──────┤
   │                                                            │
   └──────────── Direct Peer-to-Peer Connection ───────────────┘
                    (video/audio/data flows directly)
```

* **Signaling Server** — a regular server (often built with Node.js + WebSockets) used only to help two peers *find* each other. Once connected, it's no longer needed for the actual call.
* **ICE (Interactive Connectivity Establishment)** — the process of discovering the best network path between two peers (handles NAT/firewalls).
* **STUN Server** — helps a device discover its own public IP address (since most devices are behind a router/NAT).
* **TURN Server** — a fallback relay server used *only* when a direct peer-to-peer connection isn't possible (e.g. strict corporate firewalls) — the video then does flow through this server.

## Real World Example

A Google Meet call:
```
1. Both users open the call link
2. Signaling server (WebSocket) exchanges connection info
3. STUN servers help each browser find its public address
4. Browsers attempt a direct P2P connection
5. If blocked by a firewall → falls back to a TURN relay server
6. Video/audio then streams directly between the two browsers
```

## 🧠 Mini Quiz

1. What is the main advantage of WebRTC over routing all video through a central server?
2. What is a Signaling Server used for?
3. When does WebRTC fall back to using a TURN server?

---