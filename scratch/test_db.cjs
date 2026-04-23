const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../server/.env') });

async function test() {
  try {
    const opts = {
        family: 4,
        serverSelectionTimeoutMS: 5000,
    };
    console.log('Connecting with family: 4...');
    await mongoose.connect(process.env.MONGO_URI, opts);
    console.log('✅ Connected');
    
    console.log('Listing collections...');
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));
    
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
}

test();
