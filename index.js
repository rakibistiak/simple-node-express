const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
// const handler = (req,res) =>{
//     res.send("Hello from Express JS")
// }


// app.get('/',handler)


app.get('/', (req,res) =>{
    res.send("Hello from Express JS and Node")
});
const users = [
    {id: 0, name:"Rakffib", email:'fsr@g.com',phone:'75609859045'},
    {id: 1, name:"Rakib", email:'r@g.com',phone:'09859045'},
    {id: 2, name:"Emon", email:'e@g.com',phone:'4354859045'},
    {id: 3, name:"Istiak", email:'i@g.com',phone:'649045'},
    {id: 4, name:"Avro", email:'a@g.com',phone:'978959045'},
];
app.get('/users',(req,res) =>{

    //use Search Query
   const search = req.query.search;
   if(search){
        const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        res.send(searchResult);
   }
   else{

       res.send(users);
   }
});

// App Method
app.post('/users', (req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('Hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser) //short cut of previous line
})

// Dynamic Api
app.get('/users/:id', (req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
    // const user = users.find(singleUser => singleUser.id === parseInt(req.params.id))
    // res.send(user);
});

app.get('/fruits', (req,res)=>{
    res.send(['mango, orange. banana'])
})
app.get('/fruits/magno/harivanga', (req,res)=>{
    res.send('Ranger er harivangga amm')
})

// Ei Function ta na dilew hbe
app.listen( port, ()=>{
    console.log('Returning from port ', { port})
})
