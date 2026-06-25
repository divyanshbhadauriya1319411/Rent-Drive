    //Create Record : used the following code when payload doesn't contain any file field 
    export async function createRecord(collection,action) {
        try {
            let response = await fetch( `${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({...action.payload })
            } )
            response = await response.json()
            return response
        }catch (error){ 
            console.log(error)
            return[]
        }

    }

    //Create Record : used the following code when payload  contain any file field 
    export async function createMultipartRecord(collection,action) {
        try {
            let response = await fetch( `${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
                method: "POST",
                headers: {
                },
                body: action.payload
            } )
            response = await response.json()
            return response
        }catch (error){ 
            console.log(error)
            return[]
        }
    }

    //Get Record
    export async function getRecord(collection,action) {
        try {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            } )
            response = await response.json()
            return response
        }catch (error){ 
            console.log(error)
            return[]
        }

    }


    //Update Record : used the following code when payload doesn't contain any file field
    export async function updateRecord(collection,action) {
        try {
            let response = await fetch( `${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${action.payload.id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({...action.payload})
            } )
            response = await response.json()
            return response
        }catch (error){ 
            console.log(error)
            return[]
        }

    }

    //Update Record : used the following code when payload  contain any file field
    export async function updateMultipartRecord(collection,action) {
        try {
            let response = await fetch( `${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${action.payload.get("id")}`, {
                method: "PUT",
                headers: {
                },
                body: action.payload
            } )
            response = await response.json()
            return response
        }catch (error){ 
            console.log(error)
            return[]
        }

    }

    //delete Record 
    export async function deleteRecord(collection,action) {
        try {
            let response = await fetch( `${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${action.payload.id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                },
            } )
            response = await response.json()
            return response
        }catch (error){ 
            console.log(error)
            return[]
        }

    }
