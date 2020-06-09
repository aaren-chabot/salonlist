const Business = require('../../models/business.model');

const getAllBusinesses = async (pageSize, currentPage, queries) => {
  try {
    // TODO .sort('-date')
    return await Business.find(queries)
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  } catch (error) {
    throw error;
  }
};

const createBusinesses = async (businessData) => {
  try {
    const business = new Business(businessData);
    return await business.save();
  } catch (error) {
    throw error;
  }
};

const getBusinessById = async (Id) => {
  try {
    const business = await Business.findById(Id);
    if (!business) throw new Error('404');
    return business;
  } catch (error) {
    throw error;
  }
};

const updateBusinessById = async (Id, businessData) => {
  try {
    const business = await Business.findById(Id);
    if (!business) throw new Error('404');
    business.set(businessData);
    return await business.save();
  } catch (error) {
    throw error;
  }
};

const deleteBusinessById = async (Id) => {
  try {
    const response = await Business.deleteOne({ _id: Id });
    if (!response.ok) throw new Error('404');
    return response.deletedCount;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBusinesses,
  createBusinesses,
  getBusinessById,
  updateBusinessById,
  deleteBusinessById
};
