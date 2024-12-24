import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv/config';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 3000;

const users = [
    {
        name: "saurashya",
        msg: "Hello from saurashya using JWT token access!",
    },
    {
        name: "batman",
        msg: "Vengeance shall befall !!",
    },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Go to /login to get your token and redirect to the /view page");
});

app.get("/login", (req, res) => {
    const user = { name: "saurashya" };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
    res.cookie('token', accessToken, { httpOnly: true, secure: true, maxAge: 3600000 });
   setTimeout(() => {
    res.redirect('/view');
   },2000)
});

app.get("/view", authenticateUser, (req, res) => {
    const authorizedUser = users.find(user => req.user.name === user.name);
    if (authorizedUser) {
        res.json(authorizedUser);
    } else {
        res.status(404).send("User not found");
    }
});

function authenticateUser(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send("Token missing");
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
            return res.status(403).send("Not Authorized for access!");
        }
        req.user = user;
        next();
    });
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
