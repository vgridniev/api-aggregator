import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    // Enable CORS
    app.enableCors({
        origin: 'http://localhost:3000', // Allow requests from this origin
        methods: 'GET,HEAD', // Allow only GET requests
        credentials: true,
    });
    const port = configService.get<number>('POSTGRES_PORT') || 4000; // Default to 4000 if PORT is not set

    const logger = new Logger('Bootstrap');
    logger.log(
        `Connecting to database at ${configService.get<number>('POSTGRES_PORT')}`,
    );
    logger.log(
        `Connecting to database at ${configService.get<string>('POSTGRES_URL')}`,
    );
    logger.log(`Starting server on port ${port}`);

    await app.listen(port);
    console.log(`Application is running on: ${await app.getUrl()}`);
    logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
