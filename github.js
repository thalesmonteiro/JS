function Adicionar() {
    var inputElement = document.querySelector("input");
    var inputValue = inputElement.value;
    inputElement.value = "";

    axios.get('https://api.github.com/users/' + inputValue + '/repos')
        .then(function(response) {
            console.log(response);
            div = document.querySelector('div');
            var listUL = document.querySelector('ul');
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