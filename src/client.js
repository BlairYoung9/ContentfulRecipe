import {createClient} from "contentful";

export const client = () => {
    createClient({
        space: process.env.REACT_APP_SPACE_ID ,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host: "preview.contentful.com"
    });
};

const getRecipes = async () => {
    try{
        await client.getEntries({
            content_type: "recipe",
            select: "fields"
        });
        return entries;
    } catch(error){
        console.log(`error fetch: ${error}`);
    }

    return {getRecipes};
}