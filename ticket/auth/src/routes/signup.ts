import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({
        min: 4,
        max: 20,
      })
      .withMessage('Password must be between 4 and 20 chars'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }

    const { email, password } = req.body;

    // new User({email, password})
    console.log('creating a user...!');

    res.send({ email, password });
  }
);

export { router as signupRouter };