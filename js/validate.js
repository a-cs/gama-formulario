function valida_campos(){
	var nome = cadastro.nome_cliente.value
	var email = cadastro.email_cliente.value
	var senha = cadastro.senha_cliente.value
	var confirmar_senha = cadastro.confirmar_senha_cliente.value
	// alert(nome)

	if(nome == ""){
		alert("Prezado Cliente, por favor preencha seu nome.")
		cadastro.nome_cliente.focus()
		return false
	}

	if(email == ""){
		alert("Prezado Cliente, por favor preencha seu email.")
		cadastro.email_cliente.focus()
		return false
	}

	if(senha == ""){
		alert("Prezado Cliente, por favor preencha sua senha.")
		cadastro.senha_cliente.focus()
		return false
	}

	if(confirmar_senha== ""){
		alert("Prezado Cliente, por favor preencha sua senha novamente.")
		cadastro.confirmar_senha_cliente.focus()
		return false
	}

	if(senha !== confirmar_senha)
	{
		alert("As senhas digitadas não iguais, tente novamente")
		cadastro.confirmar_senha_cliente.focus()
		return false
	} else {
		alert("Prezado cliente "+nome+" vamos enviar as infos para o email "+email)
	}

}