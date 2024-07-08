import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

const employees = {
  "John Doe": "Manager",
  "Jane Smith": "Developer",
  "Alice Johnson": "Designer",
  "Bob Brown": "Sales"
};


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { header: 'My EJS Page', footer: 'This is rendered using EJS!', page:"01" , employees });
});
app.get('/chart', (req, res) => {
    res.render('chart', { header: 'My EJS Page', footer: 'This is rendered using EJS!', page:"01" });
});
    
app.get('/cover', (req, res) => {
    res.render('cover');
});
    

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});