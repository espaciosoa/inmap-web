// const iaEndpoint = "http://measurements.espaciosoa.com:8000"
const iaEndpoint = "https://ia.measurements.espaciosoa.com"




// Ver si el servidor está activo
export async function requestIAServerAlive() {
    const response = await fetch(`${iaEndpoint}/ia_estimator`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });

    const responseContent = await response.json();

    // console.log("Server status", responseContent)
    return responseContent

}


//1. Entrenamiento global
export async function requestIAGlobalTraining() {
    const response = await fetch(
        `${iaEndpoint}/ia_estimator/runGlobalTraining`,
        {
            method: "POST",
        });
    console.log("GLOBAL TRAINING ENDPOINT", response)

    const responseContent = await response.json();
    console.log("RESPONSE CONTENT REQUEST IA GLOBAL", responseContent)
    return responseContent
}


//2. Esto genera el dataset para una room concreta
export async function requestIAIndividualTraining(jobId, roomName) {

    const body = JSON.stringify({
        job_id: jobId,
        room_name: roomName
    })

    const response = await fetch(
        `${iaEndpoint}/ia_estimator/runIndividualTraining`,
        {
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


//3. Esto me da los puntos estimados para una sala
export async function requestEstimatedMapData(job_id, roomName) {

    const response = await fetch(
        `${iaEndpoint}/ia_estimator/mapa/extraer`
        , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                job_id: job_id,
                room_name: roomName
            })
            ,
        });
    console.log("GETTING ESTIMATED DATA FOR ROOM", response)

    const responseContent = await response.json();
    console.log("RESPONSE CONTENT FOR MAP REQUEST", responseContent)

    return responseContent
}


export async function requestIAJobStatus(jobId) {
    const response = await fetch(
        `${iaEndpoint}/ia_estimator/jobStatus/${jobId}`,
        {
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


















