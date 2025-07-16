    import dotenv from 'dotenv';
     dotenv.config();
    import express from 'express';
    import mongoose from 'mongoose';
    import router from './Routes/authRoutes.js';
    import cors from 'cors';
    import checkAuth from './middleware/authMiddleware.js';
    const app = express();
    app.use(cors());
   

    app.use(express.json());

    mongoose.connect(process.env.MONGO)
        .then(() => {
            console.log("Connected to MongoDB");
            app.listen(process.env.PORT, () => {
                console.log(`Server is running on port ${process.env.PORT}`);
            });
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
        });

    app.use((req, res, next) => {
        console.log(`${req.method} request for '${req.url}'`);
        next();
    })

    app.use('/auth',router)
    app.use(checkAuth);
    app.get('/protected', (req, res) => {
        res.json({ message: 'This is a protected route', user: req.user });
    });