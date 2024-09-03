//Function to add data inside 'users' Table
import { getClient } from "./index";

async function insertData() {
    const client = await getClient();
    try {
        // await client.query(`
        //     INSERT INTO users (username, email, password)
        //     VALUES ('JohnDoe', 'johndoe@gmail.com', 'password123');
        // `);
        // This can cause SQL INJECTION
        
        //Right way to insert
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
        const userValues = ["JohnDoe", "johndoe@gmail.com", "password123"]
        await client.query(insertQuery, userValues);
        console.log("Insertion success")
    } catch (error) {
        console.error("Error inserting data", error);
    }
}

insertData();