import { Provider } from "@nestjs/common";

async function fetchDBConfig() {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve({
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '12321232',
                database: 'blogapp',
            })
        }, 2000);
    })

};

export const DBConfigProvider: Provider = {
    provide: 'DB_CONFIG',
    useFactory: async () => {
        console.log("Fetching DB config...");
        const config = await fetchDBConfig();
        console.log("DB config fetched!");
        return config;
    }
}