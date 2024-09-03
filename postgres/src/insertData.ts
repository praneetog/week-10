//Function to add data inside 'users' Table
import { getClient } from "./index";

async function insertData() {
    const client = await getClient();
    try {
        await client.query(`
            INSERT INTO users (username, email, password)
            VALUES ('jJohnDoe', 'johndoe@gmail.com', 'password123');
        `);
    } catch (error) {
        console.error("Error inserting data", error);
    }
}

insertData();