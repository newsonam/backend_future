const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }   
});

const Card = mongoose.model('Card Data', cardSchema);

const insertDocument = async () => {
    const result = await Card.insertMany([
        {
            "id": "1",
            "title":"Branches" ,
            "description": "Abstract branches lets you manage ,version , and document your designs in one place",
        },
        {
            "id": "2",
            "title":"Manage your account" ,
            "description": "Configure your account settings,such as your email , profile details , and password",
        },
        {
            "id": "3",
            "title":"Manage organizations,teams, and projects" ,
            "description": "Use Abstract organizations,teams and projects to organize your people and your work",
        },
        {
            "id": "4",
            "title":"Manage billing" ,
            "description": "Change subscriptions and payment details",
        },
        {
            "id": "5",
            "title":"Authenticate to Abstract" ,
            "description": "Set up and configure SSO ,SCIM ,and Just-in-time provisioning",
        },
        {
            "id": "6",
            "title":"Abstract support" ,
            "description": "Get in touch with a human",
        },
    ])
}

// insertDocument();
       

module.exports = Card