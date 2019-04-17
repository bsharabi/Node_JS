
/*Method 1*/

//create func
    function year()//name function
    {
        //Create a variable named 'y'
        var y=new Date();
        return y.getFullYear();
    }
    //expert 
    module.exports={
        //key     value//
        "newyear":year
    }