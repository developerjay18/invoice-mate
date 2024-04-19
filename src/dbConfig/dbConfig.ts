// creating database connection
import mongoose from 'mongoose';

export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MONGODB CONNECTED SUCCESSFULLY');
    });

    connection.on('error', (error: any) => {
      console.log(
        'MONGODB CONNECTION FAILED IT"S A SERVER PROBLEM',
        error.message
      );
      process.exit(1);
    });
  } catch (error: any) {
    throw new Error('ERROR WHILE CONNECTING DATABASE', error.message);
  }
}
