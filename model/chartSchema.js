const mongoose = require("mongoose");

const datapointsSchema = new mongoose.Schema({
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    label: { type: String, required: true },
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
//     "datapoints": [
//         {
//             "x": 50,
//             "y": 20,
//             "label":"second point" 
//         }
//     ]
// }
