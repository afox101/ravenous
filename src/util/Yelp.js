const apiKey = '<sAWmzP7hkeZHwrhm4tkGtbP5thuso4rTIf2HXe1y6BsCdEmngl0nYAl0DF2VKflMPk0G_LlzaPWwWK2SL8pRuq8xC_TC6AmXTWaGTCuUsxdMOx30_-dM_JaWayyoW3Yx>'

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/searchterm=${term}&location=${location}&sort_by=${sortBy}`, 
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zipCode,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.reviewCount
                }))
            }
        })
    }
}
export default Yelp