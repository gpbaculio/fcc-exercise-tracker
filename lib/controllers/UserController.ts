import { Request, Response } from 'express';
import User, { UserDocument } from '../models/User';
import Exercise from '../models/Exercise';

interface Query {
  userId: string;
  date?: { $gte?: Date; $lte?: Date };
  to?: string;
  limit?: number;
}
type Key = 'username' | '_id';

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
    const isExisting = await this.isExisting('_id', userId);
    if (isExisting) {
      if (!from && to) return res.json('Please provide starting date');
      const query: Query = { userId };
      if (from) query.date = { $gte: new Date(from) };
      if (to) query.date = { ...query.date, $lte: new Date(to) };
      if (limit) query.limit = limit;
      await Exercise.find(query)
        .then(exercises => res.json(exercises))
        .catch(error => res.json({ error }));
    }
  };
}
