import mongoose, { Schema, model, Model, Document } from 'mongoose';
import { Allergy } from '../../domain/allergy.entity';

// Interface para representar o documento do MongoDB
export interface AllergyDocument extends Allergy, Document {
  id: string;
}

const allergySchema = new Schema(
  {
    relationshipType: {
      type: String,
      required: true,
      enum: ['self', 'dependent']
    },
    diagnosedAt: {
      type: Date,
      required: true
    },
    severity: {
      type: String,
      required: true,
      enum: ['low', 'medium', 'high']
    },
    notes: {
      type: String
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

export const AllergyModel: Model<AllergyDocument> = mongoose.models.Allergy || model<AllergyDocument>('Allergy', allergySchema, 'allergies');