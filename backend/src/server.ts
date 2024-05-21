import app from './app';
const PORT = 3000;

// app.get('/todos', (req, res) => {
//     res.json({message: "Hello"});
// })

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
})