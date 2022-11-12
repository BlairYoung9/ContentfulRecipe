import { createClient } from "contentful";


export const client = () => {
    let whatever = createClient({
        space: "ao238k3sspp2",
        accessToken: "l2r9qrrapIdHhdIEpZ2eTnv8r0N1_k8iOi7xYKvLxcw",
    });
    return whatever;
};