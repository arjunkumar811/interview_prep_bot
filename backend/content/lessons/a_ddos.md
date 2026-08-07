⏳ **Estimated Learning Time:** 10-15 min

## CAPTCHAs

## 🤔 What is a CAPTCHA?

CAPTCHA = **Completely Automated Public Turing test to tell Computers and Humans Apart**.

It's a challenge that's easy for a human but hard for a bot — like clicking all images with traffic lights, or solving a distorted-text puzzle.

```
Bot tries to submit form 10,000 times/second
        │
        ▼
CAPTCHA blocks it — bots can't solve the puzzle
```

Used for: signup forms, login pages, comment sections, checkout flows.

## DDoS Attacks

## 🤔 What is a DDoS Attack?

**Distributed Denial of Service** — thousands (or millions) of compromised devices ("botnet") flood a server with traffic at once, so it can't respond to real users.

```
Attacker
   │
   ▼
Botnet (10,000 hijacked devices)
   │
   ├──► Server (fake request)
   ├──► Server (fake request)
   ├──► Server (fake request)
   └──► ... (real users can't get through)
```

Imagine a restaurant where 10,000 fake customers call and hang up over and over — real customers can never get through on the phone line.

## Defending Against DDoS

✅ **CDN / Reverse Proxy** (e.g. Cloudflare) absorbs traffic before it hits your server
✅ **Rate Limiting** blocks abusive IPs
✅ **Auto-scaling** adds servers to absorb legitimate spikes
✅ **CAPTCHAs** filter bots from real users
✅ **IP blacklisting / geofencing** blocks known malicious sources

## 🧠 Mini Quiz

1. What does CAPTCHA stand for?
2. What does "Distributed" mean in DDoS?
3. Name two defenses against a DDoS attack.

---