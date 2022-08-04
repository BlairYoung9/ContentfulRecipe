import {createClient} from "contentful";


export const client = () => {
    console.log(process.env)
    let whatever = createClient({
        space: process.env.REACT_APP_SPACE_ID ,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host: "preview.contentful.com"
    });
    return whatever;
};

export const getRecipes = async () => {
    try{
        const entries = await client().getEntries({
            content_type: "recipe",
            select: "fields"
        });
        return entries;
    } catch(error){
        console.log(`error fetch: ${error}`);
        return;
    }
    
    //return {getRecipes}
}