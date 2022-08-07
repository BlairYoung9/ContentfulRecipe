import React, {useState, useEffect, useCallBack} from 'react'
import { client } from '../../client'

const Carousel = () => {

    const [isCarouselLoading, setIsCarouselLoading] = useState(false)
    const [carouselSlides, setCarouselSlides] = useState([])

    const getCarouselSlides =  useCallBack(async () => {
        try {
            const res = await client.getEntries({content_type: 'kitchenCarousel'})
            const resData = res.items
            console.log(resData)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    })

    useEffect(() => {
        getCarouselSlides()
    },[getCarouselSlides])

    return (
        <div>
            <h1>Kitchen Pics</h1>
        </div>
    )
}

export default Carousel