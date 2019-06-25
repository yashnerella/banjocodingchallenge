let UserModel = require('../database/models/users.model')
const express = require('express')
const router = express.Router()

//TODO: catch errors in common error handlers

//Create a new user
//TODO: use express-validator to validate request
//TODO: hash the password before saving
router.post('/signup', (req, res) => {
    if (!req.body) {
        res.status(400).json({error: 'Request body is missing'})
    }

    let model

    try {
        model = new UserModel(req.body)
    } catch (err) {
        res.status(500).json({error: err.message})
    }


    model.save().then((doc) => {
        if (!doc || doc.length === 0) {
            res.status(500).send(doc)
        }

        res.status(200).send(doc)
    }).catch((err) => {
        res.status(500).json({error: err.message})
    })
})

//Authenticate an user
//TODO: use express-validator to validate request
router.post('/signin', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({error: 'Credentials Missing'})
    }

    UserModel.find(req.body).then((docs) => {
        if (docs.length === 1) {
            res.status(200).json(docs[0])
        }

        if (docs.length === 0) {
            res.status(401).json({error: 'Not authorized'})
        }
    }).catch((err) => {
        res.status(500).json({error: err.message})
    })
})

//Get all users
router.get('/', (req, res) => {
    UserModel.find().then((docs) => {
        res.status(200).json(docs)
    }).catch((err) => {
        res.status(500).json({error: err.message})
    })
})

//Add a property for a user
//TODO: use express-validator to validate request
//TODO: figure out unique coordinates across documents
//TODO: remove else blocks
router.post('/:id/property', (req, res) => {
    if (!req.body.longitude || !req.body.latitude || !req.body.description || !req.body.price) {
        res.status(400).json({error: 'Invalid location data'})
    }

    UserModel.findById({ _id: req.params.id }).then((doc) => {
        if (doc) {
            let {longitude, latitude, description, price} = req.body
            let __latlong__ = latitude.toString() + longitude.toString()
            let property = {
                coordinates: [longitude, latitude],
                __latlong__,
                description,
                price
            }

            let locations = doc.properties.map(property => property.__latlong__)
            let isPropertyUniqueForUser = !locations.includes(__latlong__)

            if (isPropertyUniqueForUser) {
                doc.properties.push(property)

                doc.save().then((doc) => {
                    res.status(200).json(doc)
                }).catch((err) => {
                    res.status(500).json({error: err.message})
                })
            } else {
                res.status(400).json({error: 'This location has already been used'})
            }
        } else {
            res.status(400).json({message: 'There is no user with the given id'})
        }
    }).catch((err) => {
        res.status(500).json({error: err.message})
    })
})

//Delete a property for a user
router.delete('/:id/property/:pid', (req, res) => {
    UserModel.findById({ _id: req.params.id }).then((doc) => {
        if (doc) {
            let property = doc.properties.id(req.params.pid)

            if (property) property.remove()

            doc.save().then((doc) => {
                res.status(200).json(doc)
            }).catch((err) => {
                res.status(500).json({error: err.message})
            })
        } else {
            res.status(400).json({message: 'There is no user with the given id'})
        }
    }).catch((err) => {
        res.status(500).json({error: err.message})
    })
})

//Update a property for a user
//TODO: use express-validator to validate request
//TODO: figure out unique coordinates across documents
//TODO: remove else blocks - use switch/case statements
router.put('/:id/property/:pid', (req, res) => {
    if (!req.body.longitude || !req.body.latitude || !req.body.description || !req.body.price) {
        res.status(400).json({error: 'Invalid location data'})
    }

    UserModel.findById({ _id: req.params.id }).then((doc) => {
        if (doc) {
            let property = doc.properties.id(req.params.pid)

            if (property) {
                let {longitude, latitude, description, price} = req.body
                let __latlong__ = latitude.toString() + longitude.toString()
                let locations = doc.properties.map((property) => {
                    if (property.id !== req.params.pid) {
                        return property.__latlong__
                    }
                })

                let isPropertyUniqueForUser = !locations.includes(__latlong__)
                let propertyDoc = {
                    coordinates: [longitude, latitude],
                    __latlong__,
                    description,
                    price
                }

                if (isPropertyUniqueForUser) {
                    property.set(propertyDoc)

                    doc.save().then((doc) => {
                        res.status(200).json(doc)
                    }).catch((err) => {
                        res.status(500).json({error: err.message})
                    })
                } else {
                    res.status(400).json({error: 'This location has already been used'})
                }
            } else {
                res.status(400).json({message: 'There is no property with the given id for this user'})
            }
        } else {
            res.status(400).json({message: 'There is no user with the given id'})
        }
    }).catch((err) => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router