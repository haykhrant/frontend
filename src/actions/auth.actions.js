export const registrationSuccess = (data) => ({
    type: 'REGISTRATION_SUCCESS',
    payload: data
})

export const registrationFailure = (err) => ({
    type: 'REGISTRATION_FAILURE',
    payload: err
})