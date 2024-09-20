const advertSchema = require('../model/Advert');

// Get all adverts
const getadverts = async (req, res) => {
  try {
    const adverts = await advertSchema.find({});
    res.status(200).json(adverts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new advert
const addadvert = async (req, res) => {
  try {
    const advert = await advertSchema.create(req.body);
    res.status(200).json(advert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an advert by ID
const getadvert = async (req, res) => {
  try {
    const { id } = req.params;
    const advert = await advertSchema.findById(id);
    if (!advert) {
      return res.status(404).json({ message: "Advert not found" });
    }
    res.status(200).json(advert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an advert by ID
const modifyadvert = async (req, res) => {
  try {
    const { id } = req.params;
    const advert = await advertSchema.findByIdAndUpdate(id, req.body, { new: true });

    if (!advert) {
      return res.status(404).json({ message: "Advert not found" });
    }

    res.status(200).json(advert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an advert by ID
const deleteadvert = async (req, res) => {
  try {
    const { id } = req.params;
    const advert = await advertSchema.findByIdAndDelete(id);

    if (!advert) {
      return res.status(404).json({ message: "Advert not found" });
    }

    res.status(200).json({ message: "Advert Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getadverts,
  deleteadvert,
  modifyadvert,
  getadvert,
  addadvert
};
