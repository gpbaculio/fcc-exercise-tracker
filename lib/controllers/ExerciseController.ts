import { Request, Response } from 'express';
import Exercise, { ExerciseDocument } from '../models/Exercise';
import User from 'models/User';

export default class ExerciseController {
  public addTodo = async (req: Request, res: Response) => {
    const { description, duration, date, userId } = req.body;
    const user = await User.findOne({ userId });
    if (user === null) return res.json('User Id does not exist');
    const exercise = await new Exercise({ description, duration, date });
    exercise.date instanceof Date;
    exercise
      .save()
      .then(({ description, duration }: ExerciseDocument) => {
        res.json({
          username: user.username,
          description,
          duration,
          _id: user._id,
          date
        });
      })
      .catch(error => res.status(400).json({ error }));
  };
}
