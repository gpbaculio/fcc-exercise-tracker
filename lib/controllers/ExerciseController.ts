import { Request, Response } from 'express';
import Exercise, { ExerciseDocument } from '../models/Exercise';
import User from '../models/User';

export default class ExerciseController {
  public add = async (req: Request, res: Response) => {
    const { description, duration, date, userId } = req.body;
    const user = await User.findOne({ _id: userId });
    if (user === null) return res.json('User Id does not exist');
    const exercise = await new Exercise({
      description,
      duration,
      date,
      userId
    });
    exercise.date instanceof Date;
    exercise
      .save()
      .then(({ description, duration, date }: ExerciseDocument) => {
        res.json({
          username: user.username,
          description,
          duration,
          userId: user._id,
          date: new Date(exercise.date).toDateString()
        });
      })
      .catch(error => res.status(400).json({ error }));
  };
}
