const simpleGit = require('simple-git');

/*
    TODOS:
        - implementar el testing de este método
        - calcular en lugar de por número de elementos por el sufijo
        - retornar además del número de tag, el tag completo
        - verificar antes de retornar que no existe el tag
        - recuperar los tags del remoto en lugar del local
*/

async function getReleaseCandidateNumber(version){
    const git = simpleGit.default();
    
    const status = await git.status();
    const branch = await git.branch();
    
    console.log(branch);
    console.log(status);

    const tags = await git.tags();
    console.log(tags.all);

    const rcVersionTemplate=version;
    console.log(rcVersionTemplate);

    let re = new RegExp(rcVersionTemplate);

    const tagsMatching = tags.all.filter(element => re.test(element));
    
    console.log(tagsMatching.length+1);

    return tagsMatching.length+1;
}

module.exports = getReleaseCandidateNumber