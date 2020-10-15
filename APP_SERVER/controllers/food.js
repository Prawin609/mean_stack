
const foodArray = [
    {
        name : "Oatmeal",
        type : "Breakfast"
    },
    {
        name : "Rice",
        type : "lunch"
    },
    {
        name : "Bread",
        type : "dinner"
    }
];

const myFavFood = "Oatmeal";

const foodlist = function(req, res){
    res.render('foodlist', {foods: foodArray});
};

const favouriteFood = function(req, res){
    res.render('favourite-food', {myFavFood});
};

module.exports = {
    foodlist,
    favouriteFood,
    foodArray,
    myFavFood
};