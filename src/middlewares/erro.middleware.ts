import { ErrorRequestHandler } from 'express';

const erroMiddleware: ErrorRequestHandler = async (err, req, res) => {
  const { status, message } = err;
  if (!status) {
    return res.status(500).json({ message: 'Internal server error' });
  }
  return res.status(status).json({ error: message });
};

export default erroMiddleware;