import { Request, Response } from 'express';
import User, { UserDocument } from '../models/User';
import Exercise, { ExerciseDocument } from '../models/Exercise';

interface Query {
  userId: string;
  date?: { $gte?: Date; $lte?: Date };
  to?: string;
  limit?: number;
}
type Key = 'username' | '_id';

interface LogResult {
  _id: string;
  username: string;
  count: number;
  log: ExerciseDocument[];
  from?: string;
  to?: string;
}

export default class UserController {
  public isExisting = async (key: Key, val: string) => {
    const user = await User.findOne({ [key]: val });
    if (user !== null) return true;
    else return false;
  };
  public add = async (req: Request, res: Response) => {
    const { username } = req.body;
    const isExisting = await this.isExisting('username', username);
    if (isExisting) {
      res.json('Username already taken.');
    } else {
      const user = await new User({
        username
      });
      user
        .save()
        .then(({ _id, username }: UserDocument) => {
          res.json({ _id, username });
        })
        .catch(error => res.json({ error }));
    }
  };
  public getLog = async (req: Request, res: Response) => {
    const { userId, from, to, limit } = req.query;
    if (!userId) return res.json('No UserId provided');
    const user = await User.findOne({ _id: userId });
    if (user === null) return res.json('Invalid User id');
    else {
      if (!from && to) return res.json('Please provide starting date');
      const query: Query = { userId };
      const result: LogResult = {
        _id: user._id,
        username: user.username,
        count: 0,
        log: []
      };
      if (from) {
        query.date = { $gte: new Date(from) };
        result.from = new Date(from).toDateString();
      }
      if (to) {
        query.date = { ...query.date, $lte: new Date(to) };
        result.to = new Date(to).toDateString();
      }

      let exercises = await Exercise.find(
        query,
        '_id description duration date'
      ).then(exrs =>
        exrs.map(exr => ({
          _id: exr._id,
          description: exr.description,
          duration: exr.duration,
          date: new Date(exr.date).toDateString()
        }))
      );
      if (limit) exercises = exercises.slice(0, limit);
      res.json({
        ...result,
        count: exercises.length,
        log: exercises
      });
    }
  };
}
