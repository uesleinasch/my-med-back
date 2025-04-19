import mongoose, { Schema, model, Model, Document } from 'mongoose';
import { Condition } from '../../domain/condition.entity';

// Interface para representar o documento do MongoDB
export interface ConditionDocument extends Condition, Document {
  id: string;
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
    },
    diagnosedAt: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ['active', 'resolved', 'recurrent', 'inactive']
    },
    treatments: {
      type: String,
      default: ""
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

export const ConditionModel: Model<ConditionDocument> = mongoose.models.Condition || model<ConditionDocument>('Condition', conditionSchema, 'medical_conditions');