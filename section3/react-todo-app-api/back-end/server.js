import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import { body, param, validationResult } from 'express-validator';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');

  db.query(`
    CREATE TABLE IF NOT EXISTS todos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN DEFAULT 0
    )
  `, (err, result) => {
    if (err) throw err;
    console.log('Todos table created or verified');
  });
});

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

app.get('/todos', (req, res) => {
  db.query('SELECT id, title, completed FROM todos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get(
  '/todos/:id',
  param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer'),
  validate,
  (req, res) => {
    const id = req.params.id;
    db.query('SELECT id, title, completed FROM todos WHERE id = ?', [id], (err, result) => {
      if (err) throw err;
      res.json(result[0]);
    });
  }
);

app.post(
  '/todos',
  body('title').isString().withMessage('Title must be a string'),
  body('completed').isBoolean().withMessage('Completed must be a boolean'),
  validate,
  (req, res) => {
    const { title, completed } = req.body;
    db.query('INSERT INTO todos (title, completed) VALUES (?, ?)', [title, completed], (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, title, completed });
    });
  }
);

app.put(
  '/todos/:id',
  param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer'),
  body('title').isString().withMessage('Title must be a string'),
  body('completed').isBoolean().withMessage('Completed must be a boolean'),
  validate,
  (req, res) => {
    const id = req.params.id;
    const { title, completed } = req.body;
    db.query('UPDATE todos SET title = ?, completed = ? WHERE id = ?', [title, completed, id], (err) => {
      if (err) throw err;
      res.json({ id, title, completed });
    });
  }
);

app.patch(
  '/todos/:id',
  param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer'),
  body('title').optional().isString().withMessage('Title must be a string'),
  body('completed').optional().isBoolean().withMessage('Completed must be a boolean'),
  validate,
  (req, res) => {
    const id = req.params.id;
    const { title, completed } = req.body;
    const updateFields = [];
    const updateValues = [];

    if (title) {
      updateFields.push('title = ?');
      updateValues.push(title);
    }

    if (typeof completed === 'boolean') {
      updateFields.push('completed = ?');
      updateValues.push(completed);
    }

    const updateQuery = `UPDATE todos SET ${updateFields.join(', ')} WHERE id = ?`;

    db.query(updateQuery, [...updateValues, id], (err) => {
      if (err) throw err;
      res.json({ id, title, completed });
    });
  }
);

app.delete(
  '/todos/:id',
  param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer'),
  validate,
  (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
      if (err) throw err;
      res.json({ id });
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});