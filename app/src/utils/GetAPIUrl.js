const GetAPIUrl = () => {
  const LOCAL_URL = 'http://localhost:3001'
  const PROD_URL = 'https://miqu-api.vercel.app'

  return process.env.NODE_ENV === 'production'
    ? PROD_URL
    : LOCAL_URL
}

export  { GetAPIUrl }