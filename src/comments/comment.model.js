import { Schema, model } from 'mongoose'
const commentSchema = newSchema ({
    text:{
        type: String,
        required: true,
        trim:true
    },
    post:{
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    author:{
         type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
},{
    timestamps: true,
    versionKey: false
})

export default model('Comment', commentSchema)