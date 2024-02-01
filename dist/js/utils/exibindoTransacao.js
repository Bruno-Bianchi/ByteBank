import { formatarData, formatarMoeda } from "./formatters.js";
export function exibeTransacao(data, valor, formato) {
    const dataFormatada = formatarData(data, formato);
    const valorFormatado = formatarMoeda(valor);
    const informacao = `${dataFormatada} - ${valorFormatado}`;
    return informacao;
}
