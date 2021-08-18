(function(){

    var button = document.getElementById("button");
        button.addEventListener("click",function(){

            var city = document.getElementById("name").value;
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=2743020fa1a091d4c73c116dc96505f7")
        .then(response => response.json())
        .then(
            function(data){


                var card = document.createElement('div');
                var place = document.getElementById("place");
                card.style = "width: 18rem";
                card.className="card";
                card.id = "card";
                

                var cardBody = document.createElement("div");
                cardBody.className = "card-body";


                var figure = document.createElement('figure');


                

                var city = document.createElement("h5");
                city.innerHTML= data.name;
                city.className = "card-title";
                cardBody.appendChild(city);

                var icon = document.createElement("img");
                icon.src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
                icon.subtit
                icon.style = "position: relative; left: 10vw";
                figure.appendChild(icon);
                
                var figcaption = document.createElement('figcaption');
                figcaption.innerHTML = "curr temp "+ data.main.temp +"°C" + " humidity " + data.main.humidity +"%" + "<br>" + " max temp " + data.main.temp_max +"°C" + " min temp " + data.main.temp_min + "°C";
                figure.appendChild(figcaption);
                cardBody.appendChild(figure);                
                
                var desc = document.createElement('p');
                desc.innerHTML =data.weather[0].description;
                desc.className ="card-text";
                cardBody.appendChild(desc);

                

                var removeButton = document.createElement('button');
                removeButton.href= "#";
                removeButton.id = "remove";
                removeButton.classList="btn btn-primary";
                removeButton.innerHTML="remove";
                cardBody.appendChild(removeButton);

                removeButton.addEventListener("click",function(event){
                        event.target.parentElement.parentElement.remove();
                })


                card.appendChild(cardBody);
                place.appendChild(card);

            }
        )
        .catch(err => console.error(err));
        })



})();

