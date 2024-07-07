import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Enable CORS
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'https://frontend-vgridniev-vgridnievs-projects.vercel.app',
            'https://api-aggregator-backend-10c40939c945.herokuapp.com',
            'https://www.postman.com',
        ],
        methods: 'GET,HEAD',
        credentials: true,
    });
    const port = process.env.PORT || 4000;

    const logger = new Logger('Bootstrap');

    await app.listen(port);
    console.log(`Application is running on: ${await app.getUrl()}`);
    logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
