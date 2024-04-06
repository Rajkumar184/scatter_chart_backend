const mongoose = require("mongoose");

const datapointsSchema = new mongoose.Schema({
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const chartSchema = new mongoose.Schema({
    label: { type: String, required: true },
    datapoints: [datapointsSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Chart = mongoose.model("chart", chartSchema);
module.exports = Chart;

// {
//     "_id": "789",
//     "label": "second point",
//     "datapoints": [
//         {
//             "_id": "123",
//             "x": 50,
//             "y": 20, 
//         },
//         {
//             "_id": "456",
//             "x": 30,
//             "y": 50, 
//         }
//     ]
// }
