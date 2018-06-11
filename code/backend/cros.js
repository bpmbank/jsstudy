module.exports = function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Method","GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","content-type");
    next();
}