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
        const recipeDirections = fields.directions;
        const recipeIngredients = fields.ingredients;
        const recipeBg = fields.photo.fields.file.url;
        const updatedRecipe = {id, recipeName, recipeDirections,recipeIngredients, recipeBg}
        console.log(updatedRecipe)
        return updatedRecipe;
    })
    setRecipes(cleanRecipes)
}, [])

const getRecipes =  useCallback(async () => {
    try {
        const res = await client().getEntries({content_type: 'recipe'})
        const resData = res.items
        console.log(resData)
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

console.log("LEO IS A CUCK")

return (
    <div className = "carousel" >
        <Swiper navigation className =  "swiper-container">
        {recipes.map((item) => {
            
            const {id, recipeBg, recipeName, recipeDirections, recipeIngredients} = item
            return(
                <SwiperSlide key = {id} >
                    <RecipeCard  recipeName={recipeName} recipeDirections={recipeDirections} recipeBg={recipeBg} recipeIngredients={recipeIngredients} /> 
                </SwiperSlide>
                )
            
        })}

        </Swiper>
    </div>
)
    }
export default Recipes;

