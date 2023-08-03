const mongoose = require('mongoose');

const project = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        issu: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Issu",
            },
        ],
        labels: [
            {
                type: String,
            },
        ],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Project', project)