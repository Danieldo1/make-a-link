const { Schema, models, model } = require("mongoose");


const ViewsSchema = new Schema({
    type:String,
    uri: String,
}, { timestamps: true });

export const Views = models?.Views || model("Views", ViewsSchema);