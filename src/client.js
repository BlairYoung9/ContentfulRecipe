import { createClient } from "contentful";


export const client = () => {
    //console.log(process.env)
    let whatever = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    });
    return whatever;
};

export const getRecipes = async () => {
    try {
        const entries = await client().getEntries({
            content_type: "recipe",
            select: "fields"
        });

        const sanitizedEntries = entries.items.map((item) => {
            const photo = item.fields.photo.fields;
            return {
                ...item.fields,
                photo
            };
        });
        
        return sanitizedEntries;

    } catch (error) {
        console.log(`error fetch: ${error}`);
        return;
    }
}