
// const {getErrorMessage} = require('../util/errorHelpers')

exports.errorHandler = (err, req, res) =>{
    const status = err.status || 404;
    res.status(status).render('404',{error:getErrorMessage(err)})
    // res.render('404',{error:getErrorMessage(err)})
}