import React, {useState, useEffect, useCallback} from 'react'
import { client } from '../../client'
import CarouselSlide from './carouselSlide'

const Carousel = () => {

    const [isCarouselLoading, setIsCarouselLoading] = useState(false)
    const [carouselSlides, setCarouselSlides] = useState([])

    const cleanUpCarouselSlides = useCallback((rawData) => {
        const cleanSlides = rawData.map((slide) => {
            const {sys,fields} = slide;
            const {id} = sys;
            const slideTitle = fields.title;
            const slideDescription = fields.description;
            const slideBg = fields.image.fields.file.url;
            const updatedSlide = {id, slideTitle, slideDescription, slideBg}
            return updatedSlide;
        })
        setCarouselSlides(cleanSlides)
    }, [])

    const getCarouselSlides =  useCallback(async () => {
        setIsCarouselLoading(true)
        try {
            const res = await client().getEntries({content_type: 'kitchenCarousel'})
            const resData = res.items

            if(resData){
                cleanUpCarouselSlides(resData)
            }else{
                setCarouselSlides([])
            }
            setIsCarouselLoading(false)
        }catch(err){
            console.log(err)
            setIsCarouselLoading(false)
        }
    }, [cleanUpCarouselSlides])

    useEffect(() => {
        getCarouselSlides()
    },[getCarouselSlides])

    console.log(carouselSlides)

    return (
        <div>
            {carouselSlides.map((item) => {
                const {id, slideBg, slideTitle, slideDescription} = item
                return(
                <CarouselSlide key = {id} slideTitle = {slideTitle} slideDescription = {slideDescription} slideBg = {slideBg} />
                )
                    
                
            })}
        </div>
    )
}

export default Carousel