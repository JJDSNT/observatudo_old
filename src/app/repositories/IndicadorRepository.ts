import { AppDataSource } from '@/app/database/initializer';
import { Indicador } from '@/app/models/Indicador';

if (!AppDataSource.isInitialized) {
    try {
        await AppDataSource.initialize();
    } catch (err) {
        console.error(`Data Source initialization error`, err);
    }
}

export const IndicadorRepository = AppDataSource.manager.getRepository(Indicador);