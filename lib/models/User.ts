import * as mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
  username: string;
}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      index: true,
      unique: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model<UserDocument>('User', UserSchema);
