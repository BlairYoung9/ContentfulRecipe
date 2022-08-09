import React from 'react'

const RecipeCard = (props) => {
    const {id, recipeTitle, recipeDescription, recipeBg} = props;
    return (
        <div style={{ backgroundImage: `url(${recipeBg})` }}>
            <div>
                <h2>{recipeTitle}</h2>
                <p>{recipeDescription}</p>
                <a href='/recipes' className='btn'>Learn More</a>
            </div>
        </div>
    )
}

export default RecipeCard