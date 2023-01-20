import mongoose from 'mongoose';
import { config } from 'dotenv';

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

config({ path: './config.env' });
import app from './app.js';

const DB = process.env.DATABASE_LOCAL;
mongoose.set('strictQuery', true);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
      useUnifiedTopology: true,
  })
    .then(() => console.log('DB connection successful')).catch((error) => {
        console.error(`DB Connection failed: ${error.message}`);
  });


const PORT = process.env.PORT || 9000;
const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT} ...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLE REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});