
// Buscar os links salvos....
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks)  || [];

    return linksSaves;
}

// Salvar os links no localStorage

export async function saveLink(key, newLink){

    let linksStored = await getLinksSave(key);

    // se já estiver o link salvo com algum id, não permitir duplicar
    const hasLink = linksStored.some( link => link.id === newLink.id )

    if(hasLink){
        console.log('Esse link já existe na sua lista');
        return;
    }

    //adicionar esses novos inks na lista.
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('link salvo com sucesso');
}

// Deletar algum link savo

export function deleteLink(links, id) {

    let myLinks = links.filter( item => {
        return(item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks) );
    console.log("LINK DELETADO COM SUCESSO!")
    return myLinks;
}

