module.exports = {
    takeScreen,
};
function takeScreen(){
driver.takeScreenshot().then(function(data){
    let base64Data = data.replace(/^data:image\/png;base64,/,"");
    require('fs').writeFile("out.png", base64Data, 'base64', function(err) {
        if(err) console.log(err);
    });
});
};