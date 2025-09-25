import { useState, useEffect } from "react"

export default function TarefasSimples() {
    
    const [listaTarefas, setListaTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    // Persistir os dados localmente 
    useEffect(() => {
        // Como listaTarefas é um array em JS, o JSON.stringify é usado para converter em formato de texto (json)
        localStorage.setItem("tarefasSimples", JSON.stringify(listaTarefas))
        
        /*
        if (listaTarefas.length > 0) {
            localStorage.setItem("tarefasSimples", JSON.stringify(listaTarefas))
        }
        */
    // Executar sempre que listaTarefas for alterado
    }, [listaTarefas])

    function removerTarefa(index) {
        // Cria uma lista sem a posição do index, O Filter é colocado ai para verificar as posições da lista de tarefas, caso ele 
        // chegue a posição que tem o mesmo número do index, ele pula a posição, fazendo que a nova lista não tenha o valor excluido
        const listaAtualizada = listaTarefas.filter((tarefa, i) => {
            return i != index
        })

        // Atualiza o estado com a nova lista
        setListaTarefas(listaAtualizada)
    }

    function adicionarTarefa() {
        
        // Caso não tenha valor no input não será adicionado. O "trim" é para apagar "espaços" no inicio e no fim da string
        if (novaTarefa.trim() == ""){
            return
        }

        // Se for digitado um texto valido
        setListaTarefas([...listaTarefas, novaTarefa])
        setNovaTarefa("")
    }

    function ordenarTarefas() {
        const listaOrdenada = [...listaTarefas].sort((a,b) => a.localeCompare(b))
        setListaTarefas(listaOrdenada)
    }
    
    return (
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <h1 className="text-center mb-4">Tarefas Simples</h1>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Digite a nova tarefa..." value={novaTarefa} onChange={(event) => setNovaTarefa(event.target.value)}/>
                <button className="btn btn-primary" onClick={adicionarTarefa}>Adicionar</button>
                <button className="btn btn-warning btn-sm" onClick={ordenarTarefas}>Ordenar Tarefas</button>
            </div>

            <ul className="list-group">

                {/* No react você pode usar o && com "então", ou seja, SE (condicional) == True , então (&&) (retorno) */}
                {listaTarefas.length == 0 && (
                  <li className="list-group-item text-center text-muted">Nenhuma tarefas adicionada</li>  
                )}

                {/* map - seria um for, porem entregando já dois valores. Exemplo: lista.map(a, b), o "a" é o valor do array, o "b" é a posição do valor no item */}
                {listaTarefas.map((tarefa, index) => (
                    <li className="list-group-item d-flex justify-content-between" key={index}>
                        {tarefa}
                        <button className="btn btn-danger btn-sm" onClick={() => removerTarefa(index)}>Remover</button>
                    </li>
                ))}

            </ul>
        </div>
    )
}