import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import APIFeatures from '../utils/apiFeatures.js';

export const getAll = Model => catchAsync(async (req, res, next) => {
    // To allow nested get reviews on tour (hack)
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.patientId };
    // EXECUTE THE QUERY
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const docs = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: docs,
    });
})

export const getOne =( Model,popOptions) => catchAsync(async (req, res, next) => {
 let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data:doc,
    });
})

export const createOne = Model => catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

     res.status(201).json({
      status: 'success',
       data: {
        doc
      },
    });
})

export const updateOne = Model => catchAsync(async (req, res, next) => {
     const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError('No document found with this ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: doc,
    });
})

export const deleteOne = Model => catchAsync(async (req, res, next) => {
     const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No tour found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
})