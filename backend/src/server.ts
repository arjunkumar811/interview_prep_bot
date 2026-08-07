import { app } from './app';
import { env } from './config/env';
import { startBot } from './bot';

const startServer = () => {
  app.listen(env.PORT, () => {
    console.log(`HTTP Server is running on port ${env.PORT}`);
  });
};

const bootstrap = async () => {
  try {
    startServer();
    await startBot();
  } catch (error) {
    console.error('Failed to start application:', error);
    process.exit(1);
  }
};

bootstrap();
