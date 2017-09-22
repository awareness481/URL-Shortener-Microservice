const mongoose = require('mongoose');
const validator = require('validator');

const Url = mongoose.model('Url',   {
    url: {
        type: 'String',
        required: true,
        minlength: 1,
        validate: {
            validator: validator.isURL,
            message: 'Invalid URL!'
        }
    }
});

module.exports({
    Url
})