const fs = require('fs');
const path = require('path');

const domains = ['user', 'roadmap', 'lesson', 'quiz', 'progress', 'bookmark'];

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

domains.forEach((domain) => {
  const Domain = capitalize(domain);

  // Controller
  fs.writeFileSync(
    path.join(__dirname, `../src/controllers/${domain}.controller.ts`),
    `import { Request, Response, NextFunction } from 'express';
import { ${Domain}Service } from '../services/${domain}.service';

export class ${Domain}Controller {
  private service = new ${Domain}Service();

  // Example placeholder
  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const data = await this.service.getAll();
      res.status(200).json({ status: 'success', data: [] });
    } catch (error) {
      next(error);
    }
  };
}
`
  );

  // Service
  fs.writeFileSync(
    path.join(__dirname, `../src/services/${domain}.service.ts`),
    `import { ${Domain}Repository } from '../repositories/${domain}.repository';

export class ${Domain}Service {
  private repository = new ${Domain}Repository();

  // Example placeholder
  public async getAll() {
    return this.repository.findAll();
  }
}
`
  );

  // Repository
  fs.writeFileSync(
    path.join(__dirname, `../src/repositories/${domain}.repository.ts`),
    `// import prisma from '../prisma/client'; // Assuming prisma client is exported from somewhere, we can import it later

export class ${Domain}Repository {
  // Example placeholder
  public async findAll() {
    // return prisma.${domain}.findMany();
    return [];
  }
}
`
  );

  // Routes
  fs.writeFileSync(
    path.join(__dirname, `../src/routes/${domain}.routes.ts`),
    `import { Router } from 'express';
import { ${Domain}Controller } from '../controllers/${domain}.controller';

const router = Router();
const controller = new ${Domain}Controller();

router.get('/', controller.getAll);

export default router;
`
  );
});

console.log('Domain scaffolding complete.');
