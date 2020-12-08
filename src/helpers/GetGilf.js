export const getData = async (categories)=>{
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=0Wluk7aqyXQ7umvO8kTbFqZjKSjxZWY2&q=${encodeURI(categories)}&limit=4`
    
    const resp = await fetch(URL)
    const {data} = await resp.json()
    
    const Gifdata = data.map((value)=>{
        return{
            id:value.id,
            title:value.title,
            url:value.images.downsized_medium.url
        }
    })
    console.log("data traida de fetch", Gifdata)
    return Gifdata
}