class UI {
    constructor() {
        this.result = document.querySelector('#result')
    }
    // show any message in html
    printMessage(message, className) {
        // create div tag
        const div = document.createElement('div')
        // append text message to the div tag
        div.appendChild(document.createTextNode(message))
        // append class name to the tag
        div.className = className
        // show the message into the html
        document.querySelector('#message').appendChild(div)

        // remove message after 3sec
        setTimeout(() => {
            this.removeMessage()
        }, 3000);

    }

    // remove message after showing into the html
    removeMessage() {
        const alert = document.querySelector('.alert')
        if (alert) {
            alert.remove()
        }
    }

    // showing result into the html
    showNews(news) {

        news.forEach(newsInfo => {
            var now = new Date(newsInfo.publishedAt)
            var date = now.toLocaleDateString();
            var time = now.toLocaleTimeString();
            this.result.innerHTML += `
            <div id="card" class="col-xl-3 col-lg-4 col-md-6 mb-4">
             <div class="card">
              <div id="image">
                <img class="card-img-top" src="${newsInfo.urlToImage}" alt="image">
              </div>
                <div class="card-body">
                <div id="title">
                    <div class="title">
                       <h3 class="card-title text-center">${newsInfo.title.split('-', 1)}</h3>
                    </div>
                </div>
                <div class="rowText">
                     <div class="text">
                       <p>${newsInfo.description}</p> 
                     </div>
                </div>
                  <span class="badge badge-info">source: ${newsInfo.source.name}</span>
                  <span class="badge badge-info">Data & Time: ${date + ' ' + time}</span>
                  <hr>
                  <a href="${newsInfo.url}" target="_blank" class="btn btn-primary btn-block">Complate News</a>
                </div>
              </div>
            </div>
            `
        });

    }
}

