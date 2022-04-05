const dev = {
    basic: 'http://localhost:3000',
}

const prod = {
    serverUrl: process.env.serverUrl,
}

const configs = process.env.NODE_ENV === 'production' ? prod : dev

export default { ...configs }
