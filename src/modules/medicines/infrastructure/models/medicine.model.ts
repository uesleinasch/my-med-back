import mongoose, { Schema, model, Model, Document } from 'mongoose';
import { Medicine } from '../../domain/medicine.entity';

// Interface para representar o documento do MongoDB
export interface MedicineDocument extends Medicine, Document {
  id: string;
}

const medicineSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    dosage: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    minQuantity: {
      type: Number,
      required: true,
    },
    batch: {
      type: String,
    },
    expiration: {
      type: Date,
      required: true,
    },
    locationId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    notes: {
      type: String,
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

export const MedicineModel: Model<MedicineDocument> = mongoose.models.Medicine || model<MedicineDocument>('Medicine', medicineSchema, 'medicines');