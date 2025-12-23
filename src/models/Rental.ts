import mongoose, { Schema, Document } from 'mongoose';

export type RentalType = 'day' | 'week' | 'month' | 'subscription';

export interface IRental extends Document {
  workspaceId: mongoose.Types.ObjectId;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  companyName?: string;
  rentalType: RentalType;
  startDate: Date;
  endDate?: Date;
  totalPrice: number;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

const RentalSchema = new Schema<IRental>(
  {
    workspaceId: {
      type: Schema.Types.ObjectId,
      ref: 'Workspace',
      required: true,
    },
    customerName: {
      type: String,
      required: [true, 'Naam is verplicht'],
      trim: true,
    },
    customerEmail: {
      type: String,
      required: [true, 'Email is verplicht'],
      trim: true,
    },
    customerPhone: {
      type: String,
      required: [true, 'Telefoonnummer is verplicht'],
      trim: true,
    },
    companyName: {
      type: String,
      trim: true,
    },
    rentalType: {
      type: String,
      required: true,
      enum: ['day', 'week', 'month', 'subscription'],
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'active', 'completed', 'cancelled'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Rental || mongoose.model<IRental>('Rental', RentalSchema);
