import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

/* 
Custom Providers & Asynchronous Providers(e.g., DB config)

   🔹A custom provider means you define how the provider should be created
     instead of letting Nest handle it automatically.       
   🔹Async provider is just a provider whose creation requires waiting for 
     something 
*/

/*
🔹useValue → Directly provide a constant value
🔹useClass → Provide a class instance (can be swapped)
🔹useFactory → Provide a value created by a function (sync or async)
*/

// async function fetchDBConfig() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             return resolve({
//                 host: 'localhost',
//                 port: 5432,
//                 username: 'postgres',
//                 password: '12321232',
//                 database: 'blogapp',
//             })
//         }, 2000);
//     })
// };

// export const DBConfigProvider: Provider = {
//     provide: 'DB_CONFIG',
//     useFactory: async () => {
//         console.log("Fetching DB config...");
//         const config = await fetchDBConfig();
//         console.log("DB config fetched!");
//         return config;
//     }
// }

//.env use
export const DBConfigProvider: Provider = {
    provide: 'DB_CONFIG',
    useFactory: async (configService: ConfigService) => {

        await new Promise((resolve) => setTimeout(resolve, 1000))

        return {
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT'),
            username: configService.get<string>('DB_USERNAME'),
            password: configService.get<string>('DB_PASSWORD'),
            database: configService.get<string>('DB_NAME'),
        }
    },
    inject : [ConfigService]
}