declare global {
    namespace NodeJS {
        interface ProcessEnv {
            RANDOM_VARIABLE: string;
            PORT: number;
        }
    }
}

/* No typing for env variables because of that d.ts file */
/* const app = process.env.RANDOM_VARIABLE; */
