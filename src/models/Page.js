import { Schema, model, models } from 'mongoose'


const PageSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 1,
        unique: true
    },
owner: {
    type: String,
    required: true
},
displayName: {
    type: String,
    default: "",
},
location: {
    type: String,
    default: "",
},
bio:{
    type: String,
    default: "",
},
bgType:{
    type: String,
    default: "color",
},
bgColor:{
    type: String,
    default: "#000000",
},
bgImage:{
    type: String,
    default: "https://make-a-link.s3.amazonaws.com/27jlqb2r83b.webp",
},
buttons:{
    type: Object,
    default: {}
}

}, {
    timestamps: true
})

export const Page =  models?.Page || model('Page', PageSchema)