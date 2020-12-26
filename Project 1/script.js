function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log('responseText:' + xmlhttp.responseText);
        try {
            var data = JSON.parse(xmlhttp.responseText);
        } catch (err) {
            console.log(err.message + " in " + xmlhttp.responseText);
            return;
        }
        callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    }

let numberOfChildren =  document.querySelector('.container').childElementCount;

    ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
        for (let index = 2; index <= numberOfChildren; index++) {
            let container = document.querySelector(`.panel:nth-of-type(${index})`);
            container.style.backgroundImage = `url(${data[0]["url"]})`;
        }
    });

    for (let index = 1; index <= numberOfChildren; index++) {
        let title = document.querySelector(`.panel:nth-of-type(${index}) > h3`);
        title.textContent = `Panel ${index}`;
    }