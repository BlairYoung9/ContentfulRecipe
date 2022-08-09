import React from 'react'
import { client } from '../../client'
import { useEffect, useState, useCallback} from "react"
import RecipeCard from './RecipeCard' 
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'

SwiperCore.use([Navigation])

const Recipes = () => {

const [recipes, setRecipes] = useState([])

const cleanUpRecipes = useCallback((rawData) => {
    const cleanRecipes = rawData.map((recipe) => {
        const {sys,fields} = recipe;
        const {id} = sys;
        const recipeName = fields.name;
        const recipeDescription = fields.description;
        const recipeBg = fields.image.fields.file.url;
        const updatedRecipe = {id, recipeName, recipeDescription, recipeBg}
        return updatedRecipe;
    })
    setRecipes(cleanRecipes)
}, [])

const getRecipes =  useCallback(async () => {
    try {
        const res = await client().getEntries({content_type: 'recipe'})
        const resData = res.items

        if(resData){
            cleanUpRecipes(resData)
        }else{
            setRecipes([])
        }
        
    }catch(err){
        console.log(err)
        
    }
}, [cleanUpRecipes])

useEffect(() => {
    getRecipes()
},[getRecipes])

return (
    <div className = "carousel">
        <Swiper navigation className =  "swiper-container">
        {recipes.map((item) => {
            const {id, recipeBg, recipeName, recipeDescription} = item
            return(
                <SwiperSlide key = {id}>
                    <RecipeCard  recipeName = {recipeName} recipeDescription = {recipeDescription} recipeBg = {recipeBg} /> 
                </SwiperSlide>
                )
            
        })}
        </Swiper>
    </div>
)
    }
export default Recipes;

