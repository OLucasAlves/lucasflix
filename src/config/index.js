 const URL = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://lucasflix.onrender.com';

export default {
    URL,
};