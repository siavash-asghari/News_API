// class
const ui = new UI()
const newsAPI = new News()






// listeners
listeners()

function listeners() {
    document.getElementById('submitBtn').addEventListener('click', search)
}







// functions
function search(e) {
    e.preventDefault();
    const newsName = document.querySelector('#news-name').value
    const country = document.querySelector('#country').value
    const category = document.querySelector('#category').value
    let result = document.querySelector('#result')
    result.innerHTML = ''
    if (newsName !== '' || category !== '' || country !== '') {

     newsAPI.queryAPI(newsName, country, category)
        .then(news => {
            const newsArray = news.news.articles
            if (newsArray.length > 0) {
                
                ui.showNews(newsArray)
            } else{
                ui.printMessage('there is no news with your filtering', 'text-center alert alert-danger mt-4')
            }
        })
    } else {
        ui.printMessage('please enter atleast one parameter', 'text-center alert alert-danger mt-4')

    }
}