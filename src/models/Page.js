import { Schema, model, models } from 'mongoose'


const PageSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 1,
        unique: true
    },

}, {
    timestamps: true
})

export const Page =  models?.Page || model('Page', PageSchema)