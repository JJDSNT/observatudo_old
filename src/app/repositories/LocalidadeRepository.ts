import { AppDataSource } from '@/app/database/initializer';
import { Localidade } from '@/app/models/Localidade';

if (!AppDataSource.isInitialized) {
    try {
        await AppDataSource.initialize();
    } catch (err) {
        console.error(`Data Source initialization error`, err);
    }
}

export const LocalidadeRepository = AppDataSource.manager.getRepository(Localidade);