# First Project Node.js - Bootcamp
![](https://img.shields.io/github/license/Igorth/first-project-node-bootcamp)

Starting the part of one of the biggest projects called GoBarber

## 📺 What I learned
Authenticated | Services | Repositories | Models | Upload Images

## Instructions

First, if you don't have Node.js you'll need to install it:
* You can do a manual install from here: `https://nodejs.org/en/`. This will include Node and its package manager, `npm`.

* If you are on a Mac and using Homebrew you can do the following:
  + `brew install node --without-npm` (`npm` and Homebrew don't play well together)
  + `curl -L https://www.npmjs.com/install.sh | sh` (so, install `npm` separately)


Once you've got Node installed:
* `git clone git@github.com/Igorth/first-project-node-bootcamp`
* `cd first-project-node-bootcamp`
* `yarn` to install dependencies
* `yarn dev:server` to start the project


## 👤Author

* [**Igor Dias**](https://www.linkedin.com/in/igordiasth/)

## What do I need to do now?

# Recuperação de senha

**RF (requisitos funcionais)**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF (requisitos não funcionais)**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN (regras de negocio)**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RNF**

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia deve ser armazenado em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíves em um dia específico de um prestador;
- O usuário deve poder realiar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenado em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos deve estar disponíveis entre 8h às 18h (primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar serviços consigo mesmo;


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
