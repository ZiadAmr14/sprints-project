import express, { Request, Response, NextFunction, Application } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('<h1>Hello World</h1>');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on  http://localhost:${PORT}`));
