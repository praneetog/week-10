//Fucntion to create 'users' Table
import { getClient } from "./index";

async function createUsersTable() {
    const client = await getClient();
    try {
        await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("Table users created successfully");
    } catch (error) {
        console.error("Error creating table users", error);
    }
}

createUsersTable();