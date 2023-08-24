// const Joi = require('joi');

// /** create hotel */
// const getHotel = {
//     body : Joi.object().keys(
//         {
//             hotel_name : Joi.string().required().trim(),
//             address: Joi.string().required().trim(),
//             starRating : Joi.string().required().trim(),
//             amenities : Joi.string().required().trim(),
//             rooms : Joi.string().required().trim(),
//             room_number : Joi.number().required().trim(),
//             price : Joi.number().required().trim()
//         }
//     )
// };

// /** get hotel list */
// const getHotelList = {
//     query : Joi.object().keys(
//         {
//             search : Joi.string().required().trim(),
//             sortBy : Joi.string().required().trim(),
//             limit : Joi.string().required().trim(),
//             page : Joi.string().required().trim()
//         }
//     )
// };

// module.exports = {
//     getHotel,
//     getHotelList
// }