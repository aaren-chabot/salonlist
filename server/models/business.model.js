const mongoose = require('mongoose');
const { imageUrlValidator, phoneValidator } = require('./validators');

// prettier-ignore
const enums = {
  businessType: ['salon', 'barber'],
  countries: ['Canada', 'USA'],
  usStates: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
  cadProvs: ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT']
};

const businessSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: [true, 'Business name is required.'],
    trim: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  type: {
    type: String,
    enum: enums.businessType,
    required: [true, 'Business must be of type salon or barber.']
  },
  rating: {
    score: {
      type: Number,
      max: 5,
      min: 0
    },
    reviews: {
      type: Number
    }
  },
  description: {
    short: {
      type: String,
      trim: true,
      maxlength: 255
    },
    long: {
      type: String,
      trim: true
    }
  },
  phone: {
    type: String,
    validate: {
      validator: phoneValidator,
      message: (props) =>
        `${props.value} is not a valid phone number. Must use ###-###-#### format!`
    },
    required: [true, 'Business phone number required']
  },
  images: {
    hero: {
      type: String,
      validate: {
        validator: imageUrlValidator,
        message: (props) => `${props.value} is not a valid image URL.`
      },
      required: [true, 'A Business needs a hero image.']
    },
    gallery: [
      {
        type: String,
        validate: {
          validator: imageUrlValidator,
          message: (props) => `${props.value} is not a valid image URL.`
        }
      }
    ]
  },
  hours: [
    {
      weekday: {
        type: String,
        required: [true, 'A weekday must be specified']
      },
      open: {
        type: String,
        required: [true, 'A weekday must be specified']
      },
      close: {
        type: String,
        required: [true, 'A weekday must be specified']
      }
    }
  ],
  address: {
    country: {
      type: String,
      default: 'Canada',
      enum: enums.countries
    },
    state: {
      type: String,
      enum: [...enums.cadProvs, ...enums.usStates],
      required: [true, 'A State or Province code is required.'],
      uppercase: true
    },
    zip: {
      type: String,
      required: [true, 'A Zip or Postal code is required.'],
      trim: true,
      uppercase: true
    },
    city: {
      type: String,
      required: [true, 'A business city is required.'],
      trim: true
    },
    street: {
      type: String,
      required: [true, 'A business street address is required.'],
      trim: true
    },
    streetDetails: {
      type: String,
      trim: true
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Business = mongoose.model(
  'business',
  businessSchema,
  'Businesses'
);
