(function(){

    fetch("http://api.openweathermap.org/data/2.5/weather?q=Rawalpindi&appid=2743020fa1a091d4c73c116dc96505f7")
    .then(response =>response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

    var button = document.getElementById("button");
        button.addEventListener("click",function(){

            var city = document.getElementById("name").value;
            fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=2743020fa1a091d4c73c116dc96505f7")
        .then(response => response.json())
        .then(
            function(data){


                var card = document.createElement('div');
                var place = document.getElementById("place");
                card.style = "width: 18rem";
                card.className="card";

                var img = document.createElement("img");
                img.className="card-img-top";
                img.src= "https://i.redd.it/d52iak5b8jn51.jpg";
                img.alt = "card image cap";
                card.appendChild(img);


                var cardBody = document.createElement("div");
                cardBody.className = "card-body";

                var city = document.createElement("h5");
                city.innerHTML= data.name;
                city.className = "card-title";
                cardBody.appendChild(city);
                
                var desc = document.createElement('p');
                desc.innerHTML =data.weather[0].description;
                desc.className ="card-text";
                cardBody.appendChild(desc);

                var icon = document.createElement("img");
                icon.src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
                cardBody.appendChild(icon);

                card.appendChild(cardBody);
                place.appendChild(card);


                


            }
        )
        .catch(err => console.error(err));
        })

        var clearButton = document.getElementById("clear");

        clearButton.addEventListener("click",function(){
           
            $("#place").empty();
        })


})();

