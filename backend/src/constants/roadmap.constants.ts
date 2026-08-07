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
  { id: 'frontend', name: 'Frontend', icon: '🔵', available: true },
  { id: 'database', name: 'Database', icon: '🟣', available: false },
];

export const BACKEND_LEVELS: LevelConstant[] = [
  { id: 'beginner', name: '🟢 Beginner (10-12+ LPA)', description: 'Designed for **entry-level** jobs and **internships**.' },
  { id: 'advanced', name: '🔴 Advanced (30L - 1Cr+)', description: 'Designed for **senior** roles.' },
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

export const FRONTEND_LEVELS: LevelConstant[] = [
  { id: 'beginner', name: '🟢 Beginner (10-12+ LPA)', description: 'Designed for **entry-level** frontend jobs, **internships**, and junior React developer roles.' },
  { id: 'advanced', name: '🔴 Advanced (15-30+ LPA)', description: 'Designed for **senior** frontend engineers and production-scale applications.' },
];

export const FRONTEND_MODULES: ModuleConstant[] = [
  // Beginner Modules
  { id: 'f_html', roadmapId: 'frontend', levelId: 'beginner', name: '1. HTML', description: 'Learn the structure of web pages.', estimatedTopics: 5, estimatedTime: '3 hours' },
  { id: 'f_css', roadmapId: 'frontend', levelId: 'beginner', name: '2. CSS', description: 'Styling web applications.', estimatedTopics: 8, estimatedTime: '8 hours' },
  { id: 'f_js', roadmapId: 'frontend', levelId: 'beginner', name: '3. JavaScript (ES6+)', description: 'Learn core JavaScript concepts.', estimatedTopics: 12, estimatedTime: '15 hours' },
  { id: 'f_ts', roadmapId: 'frontend', levelId: 'beginner', name: '4. TypeScript', description: 'Static typing for JavaScript.', estimatedTopics: 6, estimatedTime: '8 hours' },
  { id: 'f_git', roadmapId: 'frontend', levelId: 'beginner', name: '5. Git & GitHub', description: 'Version control basics.', estimatedTopics: 4, estimatedTime: '4 hours' },
  { id: 'f_react', roadmapId: 'frontend', levelId: 'beginner', name: '6. React', description: 'Building user interfaces with React.', estimatedTopics: 10, estimatedTime: '12 hours' },
  { id: 'f_router', roadmapId: 'frontend', levelId: 'beginner', name: '7. React Router', description: 'Client-side routing.', estimatedTopics: 4, estimatedTime: '4 hours' },
  { id: 'f_tailwind', roadmapId: 'frontend', levelId: 'beginner', name: '8. Tailwind CSS', description: 'Utility-first CSS framework.', estimatedTopics: 5, estimatedTime: '5 hours' },
  { id: 'f_state', roadmapId: 'frontend', levelId: 'beginner', name: '9. State Management', description: 'Context API, Zustand, Redux Toolkit.', estimatedTopics: 7, estimatedTime: '8 hours' },
  { id: 'f_api', roadmapId: 'frontend', levelId: 'beginner', name: '10. API Integration', description: 'Fetch API and Axios.', estimatedTopics: 4, estimatedTime: '5 hours' },
  { id: 'f_forms', roadmapId: 'frontend', levelId: 'beginner', name: '11. Forms & Validation', description: 'React Hook Form and Zod.', estimatedTopics: 4, estimatedTime: '4 hours' },
  { id: 'f_auth', roadmapId: 'frontend', levelId: 'beginner', name: '12. Authentication', description: 'JWT and OAuth flows in React.', estimatedTopics: 5, estimatedTime: '6 hours' },
  { id: 'f_testing', roadmapId: 'frontend', levelId: 'beginner', name: '13. Testing', description: 'Vitest and Playwright basics.', estimatedTopics: 6, estimatedTime: '6 hours' },
  { id: 'f_nextjs', roadmapId: 'frontend', levelId: 'beginner', name: '14. Next.js', description: 'Introduction to Next.js.', estimatedTopics: 8, estimatedTime: '10 hours' },
  { id: 'f_deploy', roadmapId: 'frontend', levelId: 'beginner', name: '15. Deployment', description: 'Deploying to Vercel and Netlify.', estimatedTopics: 3, estimatedTime: '2 hours' },

  // Advanced Modules
  { id: 'f_a_js', roadmapId: 'frontend', levelId: 'advanced', name: '1. Advanced JavaScript', description: 'Closures, Prototypes, Event Loop.', estimatedTopics: 6, estimatedTime: '8 hours' },
  { id: 'f_a_ts', roadmapId: 'frontend', levelId: 'advanced', name: '2. Advanced TypeScript', description: 'Generics, Utility Types, Type Inference.', estimatedTopics: 5, estimatedTime: '7 hours' },
  { id: 'f_a_react', roadmapId: 'frontend', levelId: 'advanced', name: '3. Advanced React', description: 'Custom Hooks, Internals, Suspense.', estimatedTopics: 8, estimatedTime: '10 hours' },
  { id: 'f_a_state', roadmapId: 'frontend', levelId: 'advanced', name: '4. Advanced State Management', description: 'React Query (TanStack Query) deep dive.', estimatedTopics: 5, estimatedTime: '6 hours' },
  { id: 'f_a_perf', roadmapId: 'frontend', levelId: 'advanced', name: '5. Performance Optimization', description: 'Lazy Loading, Virtualization, Tree Shaking.', estimatedTopics: 6, estimatedTime: '8 hours' },
  { id: 'f_a_nextjs', roadmapId: 'frontend', levelId: 'advanced', name: '6. Advanced Next.js', description: 'App Router, RSC, SSR, SSG, Middleware.', estimatedTopics: 9, estimatedTime: '12 hours' },
  { id: 'f_a_sec', roadmapId: 'frontend', levelId: 'advanced', name: '7. Frontend Security', description: 'XSS, CSRF, CSP, Secure Auth.', estimatedTopics: 5, estimatedTime: '6 hours' },
  { id: 'f_a_sys', roadmapId: 'frontend', levelId: 'advanced', name: '8. System Design for Frontend', description: 'Scalable Architecture, Design Systems.', estimatedTopics: 4, estimatedTime: '5 hours' },
  { id: 'f_a_micro', roadmapId: 'frontend', levelId: 'advanced', name: '9. Micro Frontends', description: 'Module Federation and MFE architectures.', estimatedTopics: 3, estimatedTime: '4 hours' },
  { id: 'f_a_a11y', roadmapId: 'frontend', levelId: 'advanced', name: '10. Accessibility (a11y)', description: 'Building accessible web apps.', estimatedTopics: 4, estimatedTime: '4 hours' },
  { id: 'f_a_i18n', roadmapId: 'frontend', levelId: 'advanced', name: '11. Internationalization (i18n)', description: 'Adding multi-language support.', estimatedTopics: 3, estimatedTime: '3 hours' },
  { id: 'f_a_pwa', roadmapId: 'frontend', levelId: 'advanced', name: '12. Progressive Web Apps (PWA)', description: 'Service workers and offline mode.', estimatedTopics: 4, estimatedTime: '5 hours' },
  { id: 'f_a_anim', roadmapId: 'frontend', levelId: 'advanced', name: '13. Advanced Animations', description: 'Framer Motion and GSAP.', estimatedTopics: 5, estimatedTime: '6 hours' },
  { id: 'f_a_test', roadmapId: 'frontend', levelId: 'advanced', name: '14. Advanced Testing', description: 'E2E, Integration, and Component Testing.', estimatedTopics: 6, estimatedTime: '8 hours' },
  { id: 'f_a_cicd', roadmapId: 'frontend', levelId: 'advanced', name: '15. CI/CD for Frontend', description: 'Automating frontend deployments.', estimatedTopics: 4, estimatedTime: '4 hours' },
  { id: 'f_a_mon', roadmapId: 'frontend', levelId: 'advanced', name: '16. Monitoring & Analytics', description: 'Sentry, Vercel Analytics.', estimatedTopics: 4, estimatedTime: '4 hours' },
  { id: 'f_a_deploy', roadmapId: 'frontend', levelId: 'advanced', name: '17. Production Deployment', description: 'Docker, CDN, Cloudflare, Scaling.', estimatedTopics: 6, estimatedTime: '7 hours' },
];
