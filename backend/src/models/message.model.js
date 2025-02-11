import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"    // refers "User" mongoose model created in the same mongoDB cluster
        },
        recieverId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        text: {
            type: String
        }, 
        image: {
            type: String,
        }
    }, 
    {timestamps: true}
)

const Message = mongoose.model("Message", messageSchema);

export default Message;