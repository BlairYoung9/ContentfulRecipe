import React from 'react'

const RecipeCard = (props) => {
    
    const {id, recipeTitle, recipeDirections, recipeBg, recipeIngredients} = props;
    return (
        <div className="slideWrap" style={{ backgroundImage: `url(${recipeBg})` }}>
            <div className='textWrap'>
                <h2>{recipeTitle}</h2>
                <p>{recipeDirections}</p>
                <p>{recipeIngredients}</p>
                <a href='/recipes' className='btn'>Learn More</a>
            </div>
        </div>
    )
}

export default RecipeCard