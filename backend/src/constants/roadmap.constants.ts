export interface RoadmapConstant {
  id: string;
  name: string;
  icon: string;
  available: boolean;
}

export interface ModuleConstant {
  id: string;
  roadmapId: string;
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

export const BACKEND_MODULES: ModuleConstant[] = [
  { id: 'b_nodejs', roadmapId: 'backend', name: '1. Node.js', description: 'Learn the fundamentals of Node.js runtime.', estimatedTopics: 10, estimatedTime: '10 hours' },
  { id: 'b_express', roadmapId: 'backend', name: '2. Express.js', description: 'Build REST APIs with Express.js.', estimatedTopics: 8, estimatedTime: '8 hours' },
  { id: 'b_rest', roadmapId: 'backend', name: '3. REST APIs', description: 'Understand RESTful architecture.', estimatedTopics: 5, estimatedTime: '5 hours' },
  { id: 'b_auth', roadmapId: 'backend', name: '4. Authentication', description: 'Implement JWT and OAuth authentication.', estimatedTopics: 7, estimatedTime: '8 hours' },
  { id: 'b_dbs', roadmapId: 'backend', name: '5. Databases', description: 'Introduction to SQL and NoSQL databases.', estimatedTopics: 6, estimatedTime: '6 hours' },
  { id: 'b_mongo', roadmapId: 'backend', name: '6. MongoDB', description: 'Master NoSQL databases using MongoDB.', estimatedTopics: 8, estimatedTime: '10 hours' },
  { id: 'b_postgres', roadmapId: 'backend', name: '7. PostgreSQL', description: 'Master relational databases with PostgreSQL.', estimatedTopics: 10, estimatedTime: '12 hours' },
  { id: 'b_prisma', roadmapId: 'backend', name: '8. Prisma ORM', description: 'Manage database access securely with Prisma ORM.', estimatedTopics: 6, estimatedTime: '6 hours' },
  { id: 'b_redis', roadmapId: 'backend', name: '9. Redis', description: 'Caching and session management with Redis.', estimatedTopics: 5, estimatedTime: '5 hours' },
  { id: 'b_mq', roadmapId: 'backend', name: '10. Message Queues', description: 'Learn about RabbitMQ and Kafka.', estimatedTopics: 7, estimatedTime: '8 hours' },
  { id: 'b_ws', roadmapId: 'backend', name: '11. WebSockets', description: 'Real-time communication with WebSockets.', estimatedTopics: 4, estimatedTime: '5 hours' },
  { id: 'b_fs', roadmapId: 'backend', name: '12. File Storage', description: 'Managing uploads with AWS S3.', estimatedTopics: 4, estimatedTime: '4 hours' },
  { id: 'b_docker', roadmapId: 'backend', name: '13. Docker', description: 'Containerize backend applications using Docker.', estimatedTopics: 6, estimatedTime: '8 hours' },
  { id: 'b_cicd', roadmapId: 'backend', name: '14. CI/CD', description: 'Set up continuous integration and deployment.', estimatedTopics: 5, estimatedTime: '6 hours' },
  { id: 'b_scaling', roadmapId: 'backend', name: '15. Scaling', description: 'Strategies for scaling backend systems horizontally.', estimatedTopics: 6, estimatedTime: '7 hours' },
  { id: 'b_deployment', roadmapId: 'backend', name: '16. Deployment', description: 'Deploy applications to AWS and other cloud providers.', estimatedTopics: 5, estimatedTime: '6 hours' },
];
