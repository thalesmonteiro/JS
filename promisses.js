var inputElement = document.querySelector("input");
var buttonElement = document.querySelector("button");

buttonElement.onclick = function() {
    var inputValue = inputElement.value;
    inputElement.value = "";
    setTimeout(function() {
        var verifyAgeP = function() {
            return new Promise(function(resolve, reject) {
                if (inputValue > 18) {
                    resolve();
                } else {
                    reject();
                }

            });
        }
        verifyAgeP()
            .then(function() {
                console.log("Age greater than 18");
            })
            .catch(function() {
                console.log("Age less than 18")
            });

    }, 2000);

}