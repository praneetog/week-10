//Function to connect to DB
import { Client } from "pg";

export async function getClient() {
    const client = new Client({
        connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
    })
    await client.connect();
    return client;
}
