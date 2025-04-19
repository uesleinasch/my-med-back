import mongoose, { Schema, model, Model, Document } from 'mongoose';
import { Condition } from '../../domain/condition.entity';

// Interface para representar o documento do MongoDB
export interface ConditionDocument extends Condition, Document {
  _id: string;
}

const conditionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    symptoms: {
      type: [String],
      default: []
    },
    chronic: {
      type: Boolean,
      default: false
    },
    infectious: {
      type: Boolean,
      default: false
    },
    notes: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (_, ret) {
        // Mantendo o _id como está
        delete ret.__v;
        return ret;
      },
    },
  }
);

export const ConditionModel: Model<ConditionDocument> = mongoose.models.Condition || model<ConditionDocument>('Condition', conditionSchema, 'medical_conditions');