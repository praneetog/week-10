import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://basic_owner:rCVh5MS1wlXU@ep-shrill-term-a1zb2nfm.ap-southeast-1.aws.neon.tech/basic?sslmode=require");
    await client.connect();
    return client;
}