import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkspace extends Document {
  name: string;
  description: string;
  type: string;
  image?: string;
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  subscriptionPrice: number; // Maandabonnement
  features: string[];
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const WorkspaceSchema = new Schema<IWorkspace>(
  {
    name: {
      type: String,
      required: [true, 'Naam is verplicht'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Beschrijving is verplicht'],
    },
    type: {
      type: String,
      required: [true, 'Type is verplicht'],
      enum: ['Kantoor', 'Vergaderruimte', 'Flexplek', 'Studio'],
    },
    image: {
      type: String,
      default: '',
    },
    pricePerDay: {
      type: Number,
      required: true,
      min: 0,
    },
    pricePerWeek: {
      type: Number,
      required: true,
      min: 0,
    },
    pricePerMonth: {
      type: Number,
      required: true,
      min: 0,
    },
    subscriptionPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    features: {
      type: [String],
      default: [],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Workspace || mongoose.model<IWorkspace>('Workspace', WorkspaceSchema);
