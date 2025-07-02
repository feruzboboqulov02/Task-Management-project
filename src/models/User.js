import { Schema,model } from "mongoose";

const USerSchema=new Schema({
    username:{type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    isAdmin: {type: Boolean, required: true}
})

const User = model('User', USerSchema);
export default User