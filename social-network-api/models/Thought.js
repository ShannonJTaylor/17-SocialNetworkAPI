const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlenght: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get (timestamp) => new Date(timestamp).toLocaleString(),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true, 
            minlength: 1,
            maxlenght: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => new Date(timestamp).toLocaleString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

//Virtual for reaction count
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;