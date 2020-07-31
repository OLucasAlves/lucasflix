 const URL = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://lucasflix-api.herokuapp.com';

export default {
    URL,
};