import mongoose, { Schema, model, Model, Document } from 'mongoose';
import { User } from '../../domain/user.entity';

// Interface para representar o documento do MongoDB
export interface UserDocument extends User, Document {
  id: string;
}

const userSchema = new Schema(
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
    role: {
      type: String,
      required: true,
      default: 'user'
    }
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

export const UserModel: Model<UserDocument> = mongoose.models.User || model<UserDocument>('User', userSchema, 'users');