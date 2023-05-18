import Joi from 'joi';

export const responseSchema = Joi.object({
  tasks: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      data: Joi.string().required(),
      isCompleted: Joi.boolean().required(),
    }),
  ),
});
