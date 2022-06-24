const Publication =require('../models/publications')


exports.create = (publicationData) => {
    Publication.create(publicationData)
}