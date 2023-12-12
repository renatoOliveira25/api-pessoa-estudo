import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export class DatabaseModel{
    private _config : object;
    private _pool: pg.Pool;
    private _client: pg.Client;

    constructor(){
        this._config = {
            user: process.env.AZURE_POSTGRESQL_USER,
            host: process.env.AZURE_POSTGRESQL_HOST,
            database: process.env.AZURE_POSTGRESQL_DATABASE,
            password: process.env.AZURE_POSTGRESQL_PASSWORD,
            port: process.env.AZURE_POSTGRESQL_PORT,
            max: 10, // Pool max size
            idleTimeoutMillis: 10000
        };
        this._pool = new pg.Pool(this._config);
        this._client = new pg.Client(this._config);
    }

    public async testeConexao(){
        try {
            await this._client.connect();
            console.log("Database connected!");
            this._client.end();
            return true;
    
        } catch (error) {
            console.log("Error to connect database X( ");
            console.log(error);
            this._client.end();
            return false
        }
    }

    public get pool(){
        return this._pool;
    }
}