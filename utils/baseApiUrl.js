const baseApiUrl = process.env.NODE_ENV === "production" 
? 'https://obscure-castle-05229.herokuapp.com' 
: 'http://localhost:1337';

export default baseApiUrl;