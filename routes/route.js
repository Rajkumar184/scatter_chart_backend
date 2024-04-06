const express = require("express");
const router = new express.Router();
const Chart = require("../model/chartSchema");

// GET route to get all charts
router.get("/getcharts", async (req, res, next) => {
  try {
    const response = await Chart.find({});
    return res.status(200).json({
      data: response,
      message: "Get all charts successfully!",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
});

// UPDATE route to create a chart
router.get("/get/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await Chart.find(
      { _id: id }
    );

    return res.status(201).json({
      data: response,
      message: "get Chart by id successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
});

// POST route to create a chart
router.post("/create", async (req, res, next) => {
  try {
    const { label, datapoints } = req.body;

    if (!datapoints) {
      return res.status(400).json({ message: "Datapoints are required" });
    }

    const newChart = new Chart({ label, datapoints });
    const response = await newChart.save();

    return res.status(201).json({
      data: response,
      message: "Chart created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
});


// UPDATE route to create a chart
router.put("/update/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { label, datapoints } = req.body;


    if (!datapoints) {
      return res.status(400).json({ message: "Datapoints are required" });
    }

    const response = await Chart.findByIdAndUpdate(
      id,
      { label, datapoints, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    return res.status(201).json({
      data: response,
      message: "Chart updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
});

//Update data point
router.post('/updateDataPoint', async (req, res) => {
  const { x, y, subId, mainId } = req.body;

  try {
    const result = await Chart.updateOne(
      { _id: mainId, 'datapoints._id': subId },
      { $set: { 'datapoints.$.x': x,'datapoints.$.y': y } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).send('DataPoint not found or not updated.');
    }

    res.status(200).send('DataPoint updated successfully.');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE route to create a chart
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Chart.findByIdAndDelete({ _id: id });


    return res.status(200).json({
      data: response,
      message: "Chart deleted successfully!",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
