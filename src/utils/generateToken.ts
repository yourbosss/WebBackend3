import jwt from 'jsonwebtoken';

export const generateToken = (userId: string, role: string) => {
  const payload = {
    userId,
    role 
  };
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });
};
