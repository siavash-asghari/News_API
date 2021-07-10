class News {
    constructor() {
        this.APIkey = '5c0a9b00c8114f2183129a1979c1aaba'
    }

    // send url to the api
    async queryAPI(newsName, country, category) {
        let url = 'https://newsapi.org/v2/'

        // check the country and category value
        if (country === '' && category === '') {
            url += 'everything?'
        } else {
            url += 'top-headlines?'
        }

        // if newsName exist
        if (newsName !== '') {
            url += `q=${newsName}&`
        }

        // if country exist
        if (country !== '') {
            url += `country=${country}&`
        }

        // if category exist
        if (category !== '') {
            url += `category=${category}&`
        }

        // complete url with key
        url += `apiKey=${this.APIkey}`

        const newsResponse = await fetch(url)
        const news = await newsResponse.json()
        return {
            news
        }
        
    }
}