// a base_url está definida para usar a variavel de ambiente definida online (netlify)
// e a também usará a variável local, caso não esteja definida online.
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';