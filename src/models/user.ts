import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    nome: string;
    email: string;
    idade: number;
    genero: string;
    telefone: string;
    cpf: string;
    rg: string;
}

const userSchema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    idade: { type: Number, required: true },
    genero: { type: String, required: true },
    telefone: { type: String },
    cpf: { type: String, required: true, unique: true },
    rg: { type: String, required: true, unique: true },
});

export default model<IUser>('User', userSchema);
