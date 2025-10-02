import { useState } from "react";

export default function Calculadora() {

    const [valor01, setValor01] = useState(0)
    const [valor02, setValor02] = useState(0)
    const [resultado, setResultado] = useState(null)

    function somar() {
        // Caso não for digitado valores no campo 01 e no campo 02
        if (parseFloat(valor01) == 0 && parseFloat(valor02) == 0){
            return
        }

        // Valores somados
        setResultado(parseFloat(valor01) + parseFloat(valor02))

        // Valores do campo 01 e 02 setados novamente como '0'
        setValor01(0)
        setValor02(0)
    }

    function subtrair() {
        // Caso não for digitado valores no campo 01 e no campo 02
        if (parseFloat(valor01) == 0 && parseFloat(valor02) == 0){
            return
        }

        // Valores subtraidos
        setResultado(parseFloat(valor01) - parseFloat(valor02))

        // Valores do campo 01 e 02 setados novamente como '0'
        setValor01(0)
        setValor02(0)
    }

    function multiplicar() {
        // Caso não for digitado valores no campo 01 e no campo 02
        if (parseFloat(valor01) == 0 && parseFloat(valor02) == 0){
            return
        }

        // Valores multiplicados
        setResultado(parseFloat(valor01) * parseFloat(valor02))

        // Valores do campo 01 e 02 setados novamente como '0'
        setValor01(0)
        setValor02(0)
    }

    function dividir() {
        // Caso não for digitado valores no campo 01 e no campo 02
        if (parseFloat(valor01) == 0 && parseFloat(valor02) == 0){
            return
        }

        // Valores divididos
        setResultado(parseFloat(valor01) / parseFloat(valor02))

        // Valores do campo 01 e 02 setados novamente como '0'
        setValor01(0)
        setValor02(0)
    }

    return (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h1 className="text-center mb-4">Calculadora</h1>

            <div className="input-group">
                <input type="number" className="m-2 form-control" value={valor01} onChange={(e) => setValor01(e.target.value)}
                />
                <input type="number" className="m-2 form-control" value={valor02} onChange={(e) => setValor02(e.target.value)}
                />
            </div>
            <div className="input-group d-flex justify-content-beetween">
                <button className="btn btn-outline-primary btn-sm m-1" onClick={somar}>Somar</button>
                <button className="btn btn-outline-secondary btn-sm m-1" onClick={subtrair}>Subtrair</button>
                <button className="btn btn-outline-danger btn-sm m-1" onClick={multiplicar}>Multiplicar</button>
                <button className="btn btn-outline-warning btn-sm m-1" onClick={dividir}>Dividir</button>
            </div>

            <div> Resultado: {resultado}</div>
        </div>
    )
}