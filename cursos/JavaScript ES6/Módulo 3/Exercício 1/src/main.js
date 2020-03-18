// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    // Com async/await
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
    
    // Sem async/await
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
umPorSegundo();


/*------------------------------------*/

import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.error('Usuário não existe');
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


/*------------------------------------*/

class Github {
    static async getRepositories(repo) {
        try {
            const response2 = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response2.data);
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
Github.getRepositories('ChristianTudeschini/desafios-starter');


/*------------------------------------*/

const buscaUsuario = async (user) => {    
    try {
        const response3 = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response3);
    } catch (err) {
        console.log('Usuário não existe');
    }
}

buscaUsuario('diego3g');
buscaUsuario('ChristianTudeschini');