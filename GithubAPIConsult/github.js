function Adicionar() {
    var inputElement = document.querySelector("input");
    var inputValue = inputElement.value;
    inputElement.value = "";
    inputElement.focus();

    axios.get('https://api.github.com/users/' + inputValue + '/repos')
        .then(function(response) {
            console.log(response);
            //select the div
            div = document.getElementById('app');
            //insert the text into the div
            div.style.position = 'absolute';
            div.innerHTML = "<br> Repositories of " + inputValue + "</br>";

            var listUL = document.querySelector('ul');
            listUL.style.position = 'absolute';
            listUL.style.top = 100;
            console.log(listUL);
            listUL.innerHTML = "";

            for (repos of response.data) {
                var item = document.createElement("li");
                item.appendChild(document.createTextNode(repos.name));
                listUL.appendChild(item);

            }

        })
        .catch(function(error) {
            console.warn(error);
        });

}