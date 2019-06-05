import { Request, Response } from 'express';
import User, { UserDocument } from '../models/User';

export default class UserController {
  public isExisting = async (username: string) => {
    const user = await User.findOne({ username });
    if (user !== null) return true;
    else false;
  };
  public add = async (req: Request, res: Response) => {
    const { username } = req.body;
    if (this.isExisting(username)) {
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
}
