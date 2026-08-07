const fs = require('fs');
const path = require('path');

const specPath = path.resolve(__dirname, '../../spec/BACKEND_CONTENT_GENERATION.md.md');
const content = fs.readFileSync(specPath, 'utf8');

const markers = [
  { start: '# 19. Advanced Backend Communication', id: 'a_comm' },
  { start: '# 20. Message Queues & Pub/Sub', id: 'a_pubsub' },
  { start: '# 21. Proxies & Reverse Proxies', id: 'a_proxies' },
  { start: '# 22. Load Balancers', id: 'a_lb' },
  { start: '# 23. Redis Deep Dive', id: 'a_redis' },
  { start: '# 24. Kafka Deep Dive', id: 'a_kafka' },
  { start: '# 25. Common Design Patterns', id: 'a_patterns' },
  { start: '# 26. Advanced DB Concepts', id: 'a_db' },
  { start: '# 27. Rate Limiting', id: 'a_rate' },
  { start: '# 28. CAPTCHAs & DDoS', id: 'a_ddos' },
  { start: '# 29. Sharding', id: 'a_sharding' },
  { start: '# 30. Replication', id: 'a_replication' },
  { start: '# 31. Resiliency & Fault Tolerance', id: 'a_resiliency' },
  { start: '# 32. Horizontal Scaling', id: 'a_hscaling' },
  { start: '# 33. Vertical Scaling', id: 'a_vscaling' },
  { start: '# 34. Polling', id: 'a_polling' },
  { start: '# 35. WebSockets Deep Dive', id: 'a_ws' },
  { start: '# 36. gRPC', id: 'a_grpc' },
  { start: '# 37. Capacity Estimation', id: 'a_capacity' },
  { start: '# 38. CAP Theorem', id: 'a_cap' },
  { start: '# 39. Testing Node.js', id: 'a_testing' },
  { start: '# 40. Real-time Communication', id: 'a_realtime' },
  { start: '# 41. WebRTC Fundamentals', id: 'a_webrtc' },
  { start: '# 🎉 You\'ve Completed the Advanced Backend Roadmap!', id: 'END' }
];

const lessonsDir = path.resolve(__dirname, '../../backend/content/lessons');
if (!fs.existsSync(lessonsDir)) {
  fs.mkdirSync(lessonsDir, { recursive: true });
}

for (let i = 0; i < markers.length - 1; i++) {
  const current = markers[i];
  const next = markers[i + 1];

  let startIndex = content.indexOf(current.start);
  let endIndex = content.indexOf(next.start, startIndex);

  if (startIndex !== -1 && endIndex !== -1) {
    let section = content.substring(startIndex, endIndex);
    
    // Remove the very first line which contains the marker
    const lines = section.split('\n');
    lines.shift(); 
    section = lines.join('\n').trim();

    const outPath = path.join(lessonsDir, `${current.id}.md`);
    fs.writeFileSync(outPath, section);
    console.log(`Created ${outPath}`);
  } else {
    console.log(`Could not find marker for ${current.id}`);
  }
}
