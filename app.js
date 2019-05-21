const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');

const app = express();
const PORT = 8800;
const url = `mongodb+srv://green_food:<Bbb1508>@cluster0-ixdnn.mongodb.net/test?retryWrites=true
`

app.set("view engine", "ejs");
app.set("views", "./view");
app.use(express.static("static"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const Users = [];

app.all('/', (req, res) => {
  const params = {
    title: 'Main Page',
    page: 'home',
    error: '',
    success: '',
    statusColor: ''
  }

  if (req.body.username !== undefined) {
    // check and add user
    Users.forEach(user => {
      if (user.username === req.body.username) {
        params.error = 'Username already exists';
      }
    });

    if (req.body.username.length < 3 || req.body.password < 3) {
      params.error = 'Username or password is too short.';
    }

    if (params.error === '') {
      const userInfo = {
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
      };
      const username = req.cookies.Users;
      Users.push(userInfo);

      params.success = 'User added successfully';
      params.statusColor = 'green';
    } else {
      params.statusColor = 'red';
    }
  }

  res.render('main', params);
});

app.all('/users', (req, res) => {
  const params = {
    title: 'List of Users',
    page: 'users',
    error: 'Wrong Username or password',
    success: '',
    statusColor: 'red'
  }

  Users.forEach(user => {
    if (user.username === req.body.username) {
      if (user.password === req.body.password) {
        params.success = `Welcome ${user.username}!`;
        params.error = '';
        params.statusColor = 'green';
      }
      res.cookie("users", Users.username);
    }
  });

  res.render('main', params);
});

app.get('/getUsers', (req, res) => {
  res.json(Users);
});

app.get('/list', (req, res) => {
  const params = {
    title: 'List of Users',
    page: 'list',
    error: '',
    success: 'List of Users',
    statusColor: 'green'
  }

  res.render('main', params);
});


app.get("/", (req, res) => {
    res.render("index",);
  });

app.listen( PORT, () => {
    console.log("http://localhost/" + PORT);
})