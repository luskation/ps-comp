## 📧 Serviço de Disparo de Emails - Pipeline CI/CD Completo

Projeto desenvolvido para o processo seletivo de **Trainee em Infraestrutura da Comp Junior - Empresa Júnior da UFLA**, demonstrando conhecimentos sólidos em **CI/CD, containerização e automação de deploys**.

---

### 📋 Sobre o Projeto

Este é um **serviço de disparo de emails** construído com **Node.js** (Projeto de autoria de Guilherme Vahl e Fernanda Kipper), que demonstra a implementação de um **pipeline completo de CI/CD** utilizando **GitHub Actions**, **Docker** e **Render**. A aplicação foi desenvolvida com foco em **boas práticas de infraestrutura**, **automação de deploys** e **containerização**.

### 🚀 Pipeline CI/CD

O diferencial deste projeto reside em seu **pipeline de CI/CD robusto e completo**, que automatiza de forma eficiente todo o processo, desde o **commit** no repositório até o **deploy em produção**.

---

### 🔧 Etapas do Pipeline

O pipeline é orquestrado via **GitHub Actions** e é composto pelas seguintes etapas sequenciais:

#### 1️⃣ Setup Environment
* **Checkout** do código fonte.
* Configuração do **Node.js 18**.
* **Cache inteligente** de dependências `npm` para acelerar *builds* subsequentes.
* Instalação das dependências do projeto.

#### 2️⃣ Tests
* Execução da suíte de testes com **Jest**.
* **Validação da integridade do código**.
* Garante que apenas código testado e funcional segue para as próximas etapas.

#### 3️⃣ Build
* **Build** do projeto.
* Geração dos **artefatos** da aplicação.
* **Upload** dos artefatos para serem utilizados nas etapas seguintes (evitando rebuilds desnecessários).

#### 4️⃣ Deploy DockerHub
* **Download** dos artefatos gerados na etapa anterior.
* **Login automático** no **Docker Hub** via *secrets* do GitHub.
* **Cache de camadas Docker** para otimização e agilidade no *build*.
* **Build da imagem Docker** com base no `Dockerfile`.
* **Push** da imagem com a tag do **SHA do commit** (para rastreabilidade).
* Atualização da tag **`latest`** para a versão mais recente.

#### 5️⃣ Deploy Render
* **Trigger automático** do **webhook** do Render.
* Início do **deploy da nova versão** em produção, garantindo a entrega contínua.

---

### 📦 Instalação e Execução Local

#### Pré-requisitos
* **Node.js 18+**
* **NPM** ou **Yarn**
* Credenciais **AWS SES** (para o serviço de envio de emails funcionar)
* Conta **Docker Hub** (necessária apenas para replicar o processo de *deploy*)

### 👨‍💻 Autor

* Este projeto contou com as seguintes contribuições:
* Projeto em Node.js e JavaScript: Fernada Kipper e Guilherme Vahl
* Pipeline CI/CD e Imagem Docker: Lucas Oliveira Rodrigues
