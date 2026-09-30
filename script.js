const formulario = document.getElementById("formulario");

const resultado = document.getElementById("resultado");

const mensagem = document.getElementById("mensagem");
const motos = [
    {
        marca: "Honda",
        modelo: "Hornet 600",
        ano: 2005,
        cilindrada: 599,
        combustivel: "Gasolina",
        manutencao: 2500
    },

    {
        marca: "Honda",
        modelo: "XRE 300",
        ano: 2012,
        cilindrada: 291,
        combustivel: "Gasolina",
        manutencao: 1800
    },

    {
        marca: "Yamaha",
        modelo: "Fazer 250",
        ano: 2025,
        cilindrada: 249,
        combustivel: "Flex",
        manutencao: 1200
    },

    {
        marca: "Honda",
        modelo: "CG 160",
        ano: 2025,
        cilindrada: 162,
        combustivel: "Flex",
        manutencao: 1000
    }
];


formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const veiculo =
        document.getElementById("veiculo").value;

    const km =
        Number(document.getElementById("km").value);

    const uso =
        document.getElementById("uso").value;


    let custo;


    if (uso === "baixo") {

        custo = 800;

    } else if (uso === "medio") {

        custo = 1500;

    } else {

        custo = 2500;

    }


    /*
     * Aumenta a estimativa para veículos
     * com quilometragem mais elevada.
     */

    if (km >= 100000) {

        custo += 1000;

    } else if (km >= 50000) {

        custo += 500;

    }


    mensagem.innerHTML = `
        <strong>${veiculo}</strong><br><br>

        Quilometragem:
        ${km.toLocaleString("pt-BR")} km<br>

        Nível de uso:
        ${uso}<br><br>

        Estimativa anual de manutenção:
        <strong>R$ ${custo.toLocaleString("pt-BR", {
            minimumFractionDigits: 2
        })}</strong>
    `;


    resultado.scrollIntoView({
        behavior: "smooth"
    });

});