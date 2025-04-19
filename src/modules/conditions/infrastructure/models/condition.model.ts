import mongoose, { Schema, model, Model, Document } from 'mongoose';
import { Condition } from '../../domain/condition.entity';

// Interface para representar o documento do MongoDB
export interface ConditionDocument extends Condition, Document {
  _id: string;
}

const conditionSchema = new Schema(
  {
    conditionId: {
      type: Schema.Types.ObjectId,
      required: true,
      auto: true
    },
    relationshipType: {
      type: String,
      required: true,
      enum: ['self', 'dependent']
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