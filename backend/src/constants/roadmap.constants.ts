export interface RoadmapConstant {
  id: string;
  name: string;
  icon: string;
  available: boolean;
}

export interface LevelConstant {
  id: string;
  name: string;
  description: string;
}

export interface ModuleConstant {
  id: string;
  roadmapId: string;
  levelId: string;
  name: string;
  description: string;
  estimatedTopics: number;
  estimatedTime: string;
}

export const ROADMAPS: RoadmapConstant[] = [
  { id: 'backend', name: 'Backend', icon: '🟢', available: true },
  { id: 'frontend', name: 'Frontend', icon: '🔵', available: false },
  { id: 'database', name: 'Database', icon: '🟣', available: false },
];

export const BACKEND_LEVELS: LevelConstant[] = [
  { id: 'beginner', name: '🟢 Beginner (0 → 1)', description: 'For developers who are new to backend development.' },
  { id: 'advanced', name: '🔴 Advanced (1 → 100)', description: 'For developers preparing for senior backend engineering interviews and production-scale systems.' },
];

export const BACKEND_MODULES: ModuleConstant[] = [
  // Beginner Modules
  { id: 'b_nodejs', roadmapId: 'backend', levelId: 'beginner', name: '1. Node.js', description: 'Learn the fundamentals of Node.js runtime.', estimatedTopics: 10, estimatedTime: '10 hours' },
  { id: 'b_express', roadmapId: 'backend', levelId: 'beginner', name: '2. Express.js', description: 'Build REST APIs with Express.js.', estimatedTopics: 8, estimatedTime: '8 hours' },
  { id: 'b_rest', roadmapId: 'backend', levelId: 'beginner', name: '3. REST APIs', description: 'Understand RESTful architecture.', estimatedTopics: 5, estimatedTime: '5 hours' },
  { id: 'b_auth', roadmapId: 'backend', levelId: 'beginner', name: '4. Authentication', description: 'Implement JWT and OAuth authentication.', estimatedTopics: 7, estimatedTime: '8 hours' },
  { id: 'b_dbs', roadmapId: 'backend', levelId: 'beginner', name: '5. Databases', description: 'Introduction to SQL and NoSQL databases.', estimatedTopics: 6, estimatedTime: '6 hours' },
  { id: 'b_mongo', roadmapId: 'backend', levelId: 'beginner', name: '6. MongoDB', description: 'Master NoSQL databases using MongoDB.', estimatedTopics: 8, estimatedTime: '10 hours' },
  { id: 'b_postgres', roadmapId: 'backend', levelId: 'beginner', name: '7. PostgreSQL', description: 'Master relational databases with PostgreSQL.', estimatedTopics: 10, estimatedTime: '12 hours' },
  { id: 'b_prisma', roadmapId: 'backend', levelId: 'beginner', name: '8. Prisma ORM', description: 'Manage database access securely with Prisma ORM.', estimatedTopics: 6, estimatedTime: '6 hours' },
  { id: 'b_redis', roadmapId: 'backend', levelId: 'beginner', name: '9. Redis', description: 'Caching and session management with Redis.', estimatedTopics: 5, estimatedTime: '5 hours' },
  { id: 'b_mq', roadmapId: 'backend', levelId: 'beginner', name: '10. Message Queues', description: 'Learn about RabbitMQ and Kafka.', estimatedTopics: 7, estimatedTime: '8 hours' },
  { id: 'b_ws', roadmapId: 'backend', levelId: 'beginner', name: '11. WebSockets', description: 'Real-time communication with WebSockets.', estimatedTopics: 4, estimatedTime: '5 hours' },
  { id: 'b_fs', roadmapId: 'backend', levelId: 'beginner', name: '12. File Storage', description: 'Managing uploads with AWS S3.', estimatedTopics: 4, estimatedTime: '4 hours' },
  { id: 'b_docker', roadmapId: 'backend', levelId: 'beginner', name: '13. Docker', description: 'Containerize backend applications using Docker.', estimatedTopics: 6, estimatedTime: '8 hours' },
  { id: 'b_cicd', roadmapId: 'backend', levelId: 'beginner', name: '14. CI/CD', description: 'Set up continuous integration and deployment.', estimatedTopics: 5, estimatedTime: '6 hours' },
  { id: 'b_scaling', roadmapId: 'backend', levelId: 'beginner', name: '15. Scaling', description: 'Strategies for scaling backend systems horizontally.', estimatedTopics: 6, estimatedTime: '7 hours' },
  { id: 'b_deployment', roadmapId: 'backend', levelId: 'beginner', name: '16. Deployment', description: 'Deploy applications to AWS and other cloud providers.', estimatedTopics: 5, estimatedTime: '6 hours' },
  { id: 'b_zod', roadmapId: 'backend', levelId: 'beginner', name: '17. Zod', description: 'Schema declaration and validation.', estimatedTopics: 4, estimatedTime: '3 hours' },
  { id: 'b_monorepo', roadmapId: 'backend', levelId: 'beginner', name: '18. Monorepos & Turborepo', description: 'Managing multi-package repositories.', estimatedTopics: 5, estimatedTime: '5 hours' },

  // Advanced Modules
  { id: 'a_comm', roadmapId: 'backend', levelId: 'advanced', name: '1. Advanced Backend Comm', description: 'Deep dive into protocols.', estimatedTopics: 5, estimatedTime: '8 hours' },
  { id: 'a_pubsub', roadmapId: 'backend', levelId: 'advanced', name: '2. Message Queues & Pub/Sub', description: 'Advanced event-driven architecture.', estimatedTopics: 6, estimatedTime: '10 hours' },
  { id: 'a_proxies', roadmapId: 'backend', levelId: 'advanced', name: '3. Proxies & Reverse Proxies', description: 'Nginx, HAProxy, and Envoy.', estimatedTopics: 4, estimatedTime: '5 hours' },
  { id: 'a_lb', roadmapId: 'backend', levelId: 'advanced', name: '4. Load Balancers', description: 'Layer 4 vs Layer 7 load balancing.', estimatedTopics: 5, estimatedTime: '6 hours' },
  { id: 'a_redis', roadmapId: 'backend', levelId: 'advanced', name: '5. Redis Deep Dive', description: 'Advanced data structures and cluster mode.', estimatedTopics: 7, estimatedTime: '8 hours' },
  { id: 'a_kafka', roadmapId: 'backend', levelId: 'advanced', name: '6. Kafka Deep Dive', description: 'Topics, partitions, and consumer groups.', estimatedTopics: 8, estimatedTime: '12 hours' },
  { id: 'a_patterns', roadmapId: 'backend', levelId: 'advanced', name: '7. Common Design Patterns', description: 'Design patterns in JS/Node.js.', estimatedTopics: 10, estimatedTime: '10 hours' },
  { id: 'a_db', roadmapId: 'backend', levelId: 'advanced', name: '8. Advanced DB Concepts', description: 'Indexing, Normalization, Query Optimization.', estimatedTopics: 12, estimatedTime: '15 hours' },
  { id: 'a_rate', roadmapId: 'backend', levelId: 'advanced', name: '9. Rate Limiting', description: 'Algorithms and distributed rate limiting.', estimatedTopics: 4, estimatedTime: '5 hours' },
  { id: 'a_ddos', roadmapId: 'backend', levelId: 'advanced', name: '10. Captchas & DDoS', description: 'Protecting your backend services.', estimatedTopics: 3, estimatedTime: '4 hours' },
  { id: 'a_sharding', roadmapId: 'backend', levelId: 'advanced', name: '11. Sharding', description: 'Database sharding strategies.', estimatedTopics: 4, estimatedTime: '6 hours' },
  { id: 'a_replication', roadmapId: 'backend', levelId: 'advanced', name: '12. Replication', description: 'Master-Slave and Multi-Master replication.', estimatedTopics: 4, estimatedTime: '6 hours' },
  { id: 'a_resiliency', roadmapId: 'backend', levelId: 'advanced', name: '13. Resiliency & Fault Tolerance', description: 'Circuit breakers and fallbacks.', estimatedTopics: 5, estimatedTime: '7 hours' },
  { id: 'a_hscaling', roadmapId: 'backend', levelId: 'advanced', name: '14. Horizontal Scaling', description: 'Scaling stateless applications.', estimatedTopics: 4, estimatedTime: '5 hours' },
  { id: 'a_vscaling', roadmapId: 'backend', levelId: 'advanced', name: '15. Vertical Scaling', description: 'Optimizing resources for single instances.', estimatedTopics: 3, estimatedTime: '4 hours' },
  { id: 'a_polling', roadmapId: 'backend', levelId: 'advanced', name: '16. Polling', description: 'Short and long polling techniques.', estimatedTopics: 3, estimatedTime: '3 hours' },
  { id: 'a_ws', roadmapId: 'backend', levelId: 'advanced', name: '17. WebSockets Deep Dive', description: 'Scaling WebSockets globally.', estimatedTopics: 6, estimatedTime: '8 hours' },
  { id: 'a_grpc', roadmapId: 'backend', levelId: 'advanced', name: '18. gRPC', description: 'High performance RPC framework.', estimatedTopics: 5, estimatedTime: '7 hours' },
  { id: 'a_capacity', roadmapId: 'backend', levelId: 'advanced', name: '19. Capacity Estimation', description: 'Estimating system requirements.', estimatedTopics: 4, estimatedTime: '5 hours' },
  { id: 'a_cap', roadmapId: 'backend', levelId: 'advanced', name: '20. CAP Theorem', description: 'Consistency, Availability, Partition Tolerance.', estimatedTopics: 3, estimatedTime: '4 hours' },
  { id: 'a_testing', roadmapId: 'backend', levelId: 'advanced', name: '21. Testing Node.js', description: 'Advanced testing strategies and mocking.', estimatedTopics: 6, estimatedTime: '8 hours' },
  { id: 'a_realtime', roadmapId: 'backend', levelId: 'advanced', name: '22. Real-time Communication', description: 'Building real-time data pipelines.', estimatedTopics: 5, estimatedTime: '6 hours' },
  { id: 'a_webrtc', roadmapId: 'backend', levelId: 'advanced', name: '23. WebRTC Fundamentals', description: 'Peer-to-peer real-time communication.', estimatedTopics: 6, estimatedTime: '8 hours' },
];
