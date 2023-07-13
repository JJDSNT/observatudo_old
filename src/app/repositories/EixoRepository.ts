import { AppDataSource } from '@/app/database/initializer';
import { Eixo } from '@/app/models/Eixo';

if (!AppDataSource.isInitialized) {
    try {
        await AppDataSource.initialize();
    } catch (err) {
        console.error(`Data Source initialization error`, err);
    }
}

export const EixoRepository = AppDataSource.manager.getRepository(Eixo);