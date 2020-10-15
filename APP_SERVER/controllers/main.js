const index = function(req, res){
    res.render('index', {title: 'Prawin'});
};

module.exports = {
    index
};