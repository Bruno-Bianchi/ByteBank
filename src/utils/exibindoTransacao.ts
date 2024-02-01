import { FormatoData } from "../types/FormatoData.js"
import { formatarData, formatarMoeda } from "./formatters.js"

 export function exibeTransacao (data: Date, valor: number, formato: FormatoData): string {
    const dataFormatada = formatarData(data, formato)
    const valorFormatado = formatarMoeda(valor)

    const informacao = `${dataFormatada} - ${valorFormatado}`

    return informacao
}