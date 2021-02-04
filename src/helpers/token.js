export const token =
  'Ub6i-WpjFEIGs0rv2WVWtxWVb0Ov2XGgZNDOQswUXW3Jd8NIpIcZNF_j9E4Fvz-p99u36_KywgSIjzbd08hDTzvc4CeMh8scUMKjKUpPc4XsWlPKGmHLZ9ZO9YUaYHYx'

export const getAuthToken = async () => {
  // const user = await Auth.currentAuthenticatedUser()

  console.log(token)

  return {
    Authorization: `Bearer ${token}`
  }
}
