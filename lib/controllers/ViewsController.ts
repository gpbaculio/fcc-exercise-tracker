import { Request, Response } from 'express';
const path = require('path');
export default class ViewsController {
  public handleHomeView = (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname + '../../../views/index.html'));
  };
}
