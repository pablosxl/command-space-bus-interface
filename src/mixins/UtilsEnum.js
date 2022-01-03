export class UtilsEnum {
    constructor() {
        
        this.CEILANDIA = { key: 1, content: "Ceilândia" };
        this.SAMAMBAIA = { key: 2, content: "Samambaia" };
        this.TAGUATINGA = { key: 3, content: "Taguatinga" };
        this.PLANO_PILOTO = { key: 4, content: " Plano Piloto" };
        this.PLANALTINA = { key: 5, content: "Planaltina" };
        this.AGUAS_CLARAS = { key: 6, content: "Águas Claras" };
        this.RECANDO_DAS_EMAS = { key: 7, content: "Recanto das Emas" };
        this.GAMA = { key: 8, content: "Gama" };
        this.GUARA = { key: 9, content: "Guará" };
        this.SANTA_MARIA = { key: 10, content: "Santa Maria" };
        this.SOBRADINHO_II = { key: 11, content: "Sobradinho II" };
        this.SAO_SEBASTIAO = { key: 12, content: "São Sebastião" };
        this.VICENTE_PIRES = { key: 13, content: "Vicente Pires" };
        this.ITAPOA = { key: 14, content: "Itapoã" };
        this.SOBRADINHO = { key: 15, content: "Sobradinho" };
        this.SUDOESTE = { key: 16, content: "Sudoeste" };
        this.BRAZLANDIA = { key: 17, content: "Brazlândia" };
        this.RIACHO_FUNDO_II = { key: 18, content: "Riacho Fundo II" };
        this.PARANOA = { key: 19, content: "Paranoá" };
        this.RIACHO_FUNDO = { key: 20, content: "Riacho Fundo" };
        this.S_CIA = { key: 21, content: "SCIA" };
        this.LAGO_NORTE = { key: 22, content: "Lago Norte" };
        this.CRUZEIRO = { key: 23, content: "Cruzeiro" };
        this.LAGO_SUL = { key: 24, content: "Lago Sul" };
        this.JARDIM_BOTANICO = { key: 25, content: "Jardim Botânico" };
        this.NUCLEO_BANDEIRANTE = { key: 26, content: "Núcleo Bandeirante" };
        this.PARK_WAY = { key: 27, content: "Park Way" };
        this.CANDANGOLANDIA = { key: 28, content: "Candangolândia" };
        this.VARJAO = { key: 29, content: "Varjão" };
        this.FERCAL = { key: 30, content: "Fercal" };
        this.S_IA = { key: 31, content: "SIA" };
        
        this.OP_CITY = [
            this.AGUAS_CLARAS,
            this.BRAZLANDIA,
            this.CANDANGOLANDIA,
            this.CEILANDIA,
            this.CRUZEIRO,
            this.FERCAL,
            this.GAMA,
            this.GUARA,
            this.JARDIM_BOTANICO,
            this.ITAPOA,
            this.LAGO_NORTE,
            this.LAGO_SUL,
            this.NUCLEO_BANDEIRANTE,
            this.PARANOA,
            this.PARK_WAY,
            this.PLANALTINA,
            this.PLANO_PILOTO,
            this.RECANDO_DAS_EMAS,
            this.RIACHO_FUNDO,
            this.RIACHO_FUNDO_II,
            this.SAMAMBAIA,
            this.SANTA_MARIA,
            this.SAO_SEBASTIAO,
            this.S_CIA,
            this.S_IA,
            this.SOBRADINHO,
            this.SOBRADINHO_II,
            this.SUDOESTE,
            this.TAGUATINGA,
            this.VARJAO,
            this.VICENTE_PIRES,
        ];
    }

    converteDeOpcoes(opc, padrao) {
        padrao = padrao || "";
        return opc && opc != "undefined" && opc.hasOwnProperty("key")
            ? opc.key
            : padrao;
      }
    
    converteParaOpcoes(opts, info, padrao) {
        info = info || padrao;
        var opc = this.procuraIndice(opts, info.key);
        return opc ? opc.key : padrao.key;
    }
}

var utilsEnum = new UtilsEnum();

//export { utilsEnum }

export { utilsEnum, UtilsEnum as default };