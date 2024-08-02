import Joi from 'joi';

export const addApartmentSchema = Joi.object({
  imgUrl: Joi.string().uri().required(),
  appartmentTypeId: Joi.number().integer().min(1).max(2).required(),
  compoundId: Joi.number().integer().min(1).max(3).required(),
  numberOfBeds: Joi.number().integer().min(1).max(5).required(),
  numberOfBaths: Joi.number().integer().min(1).max(5).required(),
  areaInM2: Joi.number().min(50).max(700).required(),
  price: Joi.number().min(0).max(999999999).required(),
  address: Joi.string().min(1).required(),
  floor: Joi.number().integer().min(1).max(40).required(),
  description: Joi.string().min(1).required(),
});
