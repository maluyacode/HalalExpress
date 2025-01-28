const mongoose = require('mongoose');

const supplyCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true,
    },
    imageUrl: {
        public_id: {
            type: String,
            default: 'HalalExpress/Profile/profile_nsvdbb'
        },
        url: {
            type: String,
            default: 'https://res.cloudinary.com/dwkmutbz3/image/upload/v1736011952/HalalExpress/Profile/profile_nsvdbb.png'
        },
    },
}, { timestamps: false, strictPopulate: false });

module.exports = mongoose.model('SupplyCategory', supplyCategorySchema);