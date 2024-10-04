import { check, param, validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import Recipe from '../models/Recipe.js';

const addRequestValidator = [
  check('titre')
    .notEmpty()
    .withMessage('Titre ne peut pas être vide!')
    .bail()
    .isLength({ min: 5 })
    .withMessage('Minimum 5 caractères requis!')
    .bail()
    .isLength({ max: 100 })
    .withMessage('Maximum 100 caractères limite!')
    .bail()
    .custom(async (value) => {
      const result = await Recipe.checkRecipe(value);
      if (result !== 0) {
        throw new Error('Cette recette existe déjà!');
      }
      return true;
    }),
  check('ingredients')
    .notEmpty()
    .withMessage('Ingredients ne peut pas être vide!')
    .bail()
    .isLength({ min: 10 })
    .withMessage('Minimum 10 caractères requis!')
    .bail()
    .isLength({ max: 500 })
    .withMessage('Maximum 500 caractères limite!')
    .bail(),
  check('type')
    .notEmpty()
    .withMessage('Type ne peut pas être vide!')
    .bail()
    .isIn(['Entrée', 'Dessert', 'Plat'])
    .withMessage("Type doit être 'Entrée', 'Dessert' ou 'Plat'"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const deleteRequestValidator = [
  param('id')
    .not()
    .isEmpty()
    .withMessage('Id est obligatoire!')
    .bail()
    .custom(async (value) => {
      const result = await Recipe.getId(value);
      if (result === 0) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const getRequestValidator = [
  param('id')
    .not()
    .isEmpty()
    .withMessage('Id est obligatoire!')
    .bail()
    .custom(async (value) => {
      const result = await Recipe.getId(value);
      if (result === 0) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const updateRequestValidator = [
  param('id')
    .notEmpty()
    .withMessage('Id est requis!')
    .bail()
    .custom(async (value) => {
      const result = await Recipe.getId(value);
      if (result === 0) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),
  check('titre')
    .notEmpty()
    .withMessage('Titre ne doit pas être vide')
    .bail()
    .isLength({ min: 5 })
    .withMessage('Minimum 5 caractères requis!')
    .bail()
    .isLength({ max: 100 })
    .withMessage('Maximum 100 caractères limite!')
    .bail()
    .custom(async (value) => {
      const result = await Recipe.checkRecipe(value);
      if (result !== 0) {
        throw new Error('Cette recette existe déjà!');
      }
      return true;
    }),
  check('ingredients')
    .notEmpty()
    .withMessage('Ingredients ne peut pas être vide!')
    .bail()
    .isLength({ min: 10 })
    .withMessage('Minimum 10 caractères requis!')
    .bail()
    .isLength({ max: 500 })
    .withMessage('Maximum 500 caractères limite!')
    .bail(),
  check('type')
    .notEmpty()
    .withMessage('Type ne peut pas être vide!')
    .bail()
    .isIn(['Entrée', 'Dessert', 'Plat'])
    .withMessage("Type doit être 'Entrée', 'Dessert' ou 'Plat'"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

export {
  addRequestValidator,
  deleteRequestValidator,
  updateRequestValidator,
  getRequestValidator,
};
