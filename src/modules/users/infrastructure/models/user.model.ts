import mongoose, { Schema, model, Model, Document } from 'mongoose';
import { User } from '../../domain/user.entity';

// Interface para representar o documento do MongoDB
export interface UserDocument extends User, Document {
  id: string;
}

// Schema para relações
const relationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  type: {
    type: String,
    required: true
  },
  since: {
    type: Date,
    default: Date.now
  }
});

// Schema para alergias
const allergySchema = new Schema({
  allergyId: {
    type: Schema.Types.ObjectId,
    required: true,
    // ref: 'Allergy' // Será implementado quando tivermos o modelo de alergias
  },
  relationshipType: {
    type: String,
    enum: ['self', 'dependent'],
    required: true
  },
  diagnosedAt: {
    type: Date,
    required: true
  },
  severity: {
    type: String,
    required: true
  },
  notes: String
});

// Schema para condições médicas
const conditionSchema = new Schema({
  conditionId: {
    type: Schema.Types.ObjectId,
    required: true,
    // ref: 'Condition' // Será implementado quando tivermos o modelo de condições
  },
  relationshipType: {
    type: String,
    enum: ['self', 'dependent'],
    required: true
  },
  diagnosedAt: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const medicalProfileSchema = new Schema({
  allergies: [allergySchema],
  conditions: [conditionSchema]
});

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
    },
    relations: [relationSchema],
    medicalProfile: {
      type: medicalProfileSchema,
      default: {
        allergies: [],
        conditions: []
      }
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