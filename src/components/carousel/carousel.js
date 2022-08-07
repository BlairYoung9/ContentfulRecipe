import React, {useState, useEffect, useCallback} from 'react'
import { client } from '../../client'

const Carousel = () => {

    const [isCarouselLoading, setIsCarouselLoading] = useState(false)
    const [carouselSlides, setCarouselSlides] = useState([])

    const cleanUpCarouselSlides = (rawData) => {
        const cleanSlides = rawData.map((slide) => {
            const {sys,fields} = slide;
            const {id} = sys;
            const slideTitle = fields.slide;
            const slideDescription = fields.description;
            const slideBg = fields.image.fields.file.url;
            const updatedSlide = {id, slideTitle, slideDescription, slideBg}
            return updatedSlide;
        })
        setCarouselSlides(cleanSlides)
    }

    const getCarouselSlides =  useCallback(async () => {
        try {
            const res = await client().getEntries({content_type: 'kitchenCarousel'})
            const resData = res.items
            console.log(resData)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }, [])

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