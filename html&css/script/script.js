
document.getElementById('myForm').addEventListener('submit', function (event) {
            event.preventDefault();
            if (validarFormulario()) {
                exibirAlerta();
            }
        });

        function validarFormulario() {
            var nome = document.getElementById('nome').value;
            var email = document.getElementById('email').value;
            var mensagem = document.getElementById('message').value;

            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos.");
                return false;
            }
            return true;
        }

        function exibirAlerta() {
            alert("Formulário enviado com sucesso!");
            limparCampos()
        }
        function limparCampos() {
            document.getElementById('nome').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
}
        
