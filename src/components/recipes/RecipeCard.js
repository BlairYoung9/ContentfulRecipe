import React from 'react'

const RecipeCard = (props) => {
    
    const {id, recipeName, recipeDirections, recipeBg, recipeIngredients} = props;
    return (
        <div className="slideWrap" style={{ backgroundImage: `url(${recipeBg})` }}>
            <div className='textWrap'>
                <h2>{recipeName}</h2>
                <h1>Directions</h1>
                <p>{recipeDirections}</p>
                <h1>Ingredients</h1>
                <p>{recipeIngredients}</p>
                <a href='/' className='btn'>Home</a>
            </div>
        </div>
    )
}

export default RecipeCard