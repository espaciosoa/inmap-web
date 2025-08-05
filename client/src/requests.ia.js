const iaEndpoint = "http://measurements.espaciosoa.com:8000"



const globalTrainingEndpoint = "/ia_estimator/runGlobalTraining"


//ESTOY PROBANDO LOS ENDPOINTS DE FER
//1. Supuestamente ejecuta el training global
export async function requestIAGlobalTraining() {
    const response = await fetch(
        // `${iaEndpoint}${globalTrainingEndpoint}`
        "http://measurements.espaciosoa.com:8000/ia_estimator/runGlobalTraining"

        , {

            method: "POST",
        });
    console.log("GLOBAL TRAINING ENDPOINT", response)

    const responseContent = await response.json();
    console.log("RESPONSE CONTENT REQUEST IA GLOBAL", responseContent)
    return responseContent
}


//2. Entiendo que esto me devuelve puntos estimados??? NO PARECE
export async function requestIAIndividualTraining(jobId, roomName) {

    const body = JSON.stringify({
        job_id: jobId,
        room_name: roomName
    })

    const response = await fetch(
        "http://measurements.espaciosoa.com:8000/ia_estimator/runIndividualTraining"
        , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        });
    console.log("IA INDIVIDUAL", response)

    const responseContent = await response.json();
    console.log("RESPONSE CONTENT REQUEST IA INDIVIDUAL", responseContent)

    return responseContent
}


//3. esto si que me da los puntos estimados
export async function requestEstimatedMapData(roomName) {

    const response = await fetch(
        `http://measurements.espaciosoa.com:8000/ia_estimator/mapa/extraer/${roomName}`
        , {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    console.log("GETTING ESTIMATED DATA FOR ROOM", response)

    const responseContent = await response.json();
    console.log("RESPONSE CONTENT FOR MAP REQUEST", responseContent)

    return responseContent
}



export async function requestIAJobStatus(jobId) {
    const response = await fetch(`http://measurements.espaciosoa.com:8000/ia_estimator/jobStatus/${jobId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    console.log(response)
    console.log(response.body)
    const responseContent = await response.json();
    console.log("RESPONSE CONTENT FOR JOB STATUS", responseContent)


    return responseContent

}



export async function requestIAServerAlive() {
    const response = await fetch(`http://measurements.espaciosoa.com:8000/ia_estimator`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    console.log(response)
    console.log(response.body)
    const responseContent = await response.json();
    console.log("RESPONSE CONTENT FOR JOB STATUS", responseContent)


    return responseContent

}















