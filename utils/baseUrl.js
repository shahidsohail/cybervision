const baseUrl = process.env.NODE_ENV === "production" 
? 'https://cybervision.com.sa' 
: 'http://localhost:3000';

export default baseUrl;