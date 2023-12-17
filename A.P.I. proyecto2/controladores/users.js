const mewUserController async = (req, res, next) => {
    try {
        res.send({
            status: 'error',
            message: 'Not implemented'
        });

    }catch(error){
        next(error);
    };
const getUserContoller async = (req, res, next) => {
    res.send({
        status: 'error',
        message: 'Not implemented'
    });
};

const loginController async = (req, res, next) => {
    res.send({
        status: 'error',
        message: 'Not implemented'
    });
};

module.exports = {
    mewUserController,
    getUserContoller,
    loginController,
};