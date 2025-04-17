import mongoose, { Schema, model, Model, Document } from 'mongoose';
import { User } from '../../domain/user.entity';

export interface UserDocument extends User, Document {
  id: string;
}

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Exportação do modelo
export const UserModel: Model<UserDocument> = mongoose.models.User || model<UserDocument>('User', userSchema);