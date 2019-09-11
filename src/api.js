import axios from "axios";

export default class Api {
    static async getUserInfo(username = 'vagnerbc') {

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            
            console.log(response);
        
        } catch (error) {
            console.warn('Erro na API');
        }
    }
}

