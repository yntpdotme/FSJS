import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URL);

		console.log(`Connected to MongoDB...`);
	} catch (error) {
		console.log('MongoDB connection error: ', error);
		process.exit(1);
	}
};

export default connectDB;
