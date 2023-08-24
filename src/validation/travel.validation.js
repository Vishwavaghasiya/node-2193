// const Joi = require('joi');

// const createTravel = {
//     body: Joi.object().keys(
//         {
//             tripName: Joi.string().required().trim(),
//             destination: Joi.string().required().trim(),
//             startDate: Joi.string().required().trim(),
//             endDate: Joi.string().required().trim(),
//             travelers: Joi.string().required().trim(),
//             accommodation: Joi.object({
//                 type: Joi.string().required().trim(),
//                 checkInDate: Joi.string().required().trim().pattern(indianDateFormat),
//                 checkOutDate: Joi.string().required().trim().pattern(indianDateFormat),
//             }).required(),
//         }
//     )
// }

// /** get travel list */
// const getTravelList = {
//     query: Joi.object().keys({
//         search: Joi.string().required().trim(),
//         sortBy: Joi.string().required().trim(),
//         limit: Joi.string().required().trim(),
//         page: Joi.string().required().trim()
//     }),
// };

// module.exports = {
//     createTravel,
//     getTravelList
// }