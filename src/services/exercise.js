const baseUrl = "demo2245146.mockable.io";

export const getExercise1 = async () => {
    const res = await fetch(`http://${baseUrl}/exercise1`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    return res.json()
}


export const getExercise2 = async () => {
    const res = await fetch(`http://${baseUrl}/exercise2`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    return res.json()
}
