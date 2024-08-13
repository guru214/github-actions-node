import express from 'express';

const app = express();
const port = 4000;

app.use(express.json()); 

// In-memory store for details
let details = [
  { id: 1, name: 'Detail 1', description: 'This is detail 1' },
  { id: 2, name: 'Detail 2', description: 'This is detail 2' },
  { id: 3, name: 'Detail 3', description: 'This is detail 3' },
];

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World! DevOps CICD');
});


// GET route for listing details
app.get('/details', (req, res) => {
  res.json(details);
});

// POST route for adding a single detail
app.post('/details', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).send('Name and description are required');
  }
  const newDetail = {
    id: details.length + 1,
    name,
    description,
  };
  details.push(newDetail);
  res.status(201).json(newDetail);
});




const server = app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});

// Export both the app and server
export { app, server };












// import express from 'express';

// const app = express();
// const port = 4000;

// app.get('/', (req, res) => {
//   res.send('Hello, World! 7');
// });

// const server = app.listen(port, () => {
//   console.log(`Server is Running on http://localhost:${port}`);
// });

// // Export both the app and server
// export { app, server };
