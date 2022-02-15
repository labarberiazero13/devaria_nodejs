try {
    const listaDeProdutosDisponiveis = [
        "Cabo",
        "HD",
        "Memória",
        "Carregador",
        "Fone",
        "Case",
        "Mouse",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto esta disponível: ${produto}`));
    
    const ListaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    })
    ListaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto não está disponível: ${argumento}`));
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponível: ${produto}`));
}catch(e){
    console.log('Não foi possível finalizar a compra!');
}

