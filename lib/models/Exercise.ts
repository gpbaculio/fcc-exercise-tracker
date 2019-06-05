import * as mongoose from 'mongoose';

export interface ExerciseDocument extends mongoose.Document {
  description: string;
  duration: number;
  date: Date;
}

const ExerciseSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model<ExerciseDocument>('Exercise', ExerciseSchema);
