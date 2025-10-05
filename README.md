# 🦸‍♂️ Marvel Characters API

Uma aplicação web para buscar e visualizar personagens da Marvel usando a API oficial da Marvel.

## 🚀 Funcionalidades

- 🔍 Busca de personagens por nome
- 🎨 Interface moderna e responsiva
- 📱 Design mobile-friendly
- ⚡ Carregamento dinâmico com feedback visual
- 🖼️ Exibição de imagens e descrições dos personagens

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **API**: Marvel Comics API
- **HTTP Client**: Axios
- **Variáveis de Ambiente**: dotenv

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Chaves da API da Marvel (pública e privada)

## ⚙️ Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/marvel-api.git
   cd marvel-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   
   Crie um arquivo `.env` na raiz do projeto com suas chaves da Marvel:
   ```env
   MARVEL_PUBLIC_KEY=sua_chave_publica_aqui
   MARVEL_PRIVATE_KEY=sua_chave_privada_aqui
   ```

   > 📝 **Como obter as chaves da Marvel:**
   > 1. Acesse [Marvel Developer Portal](https://developer.marvel.com/)
   > 2. Crie uma conta gratuita
   > 3. Gere suas chaves de API

## 🚀 Como executar

1. **Inicie o servidor:**
   ```bash
   npm start
   ```
   ou
   ```bash
   node index.js
   ```

2. **Acesse a aplicação:**
   
   Abra seu navegador e vá para: `http://localhost:3000`

## 📁 Estrutura do Projeto

```
marvel-api/
├── index.html          # Página principal (interface)
├── styles.css          # Estilos CSS
├── script.js           # JavaScript do frontend
├── index.js            # Servidor Express
├── marvel.js           # Integração com API da Marvel
├── package.json        # Dependências e scripts
├── .env               # Variáveis de ambiente (não versionado)
├── .gitignore         # Arquivos ignorados pelo Git
└── README.md          # Documentação
```

## 🎯 Como usar

1. Digite o nome de um personagem Marvel na caixa de busca
2. Pressione "Buscar" ou tecle Enter
3. Os resultados aparecerão em cards visuais
4. Cada card mostra:
   - Foto do personagem
   - Nome
   - Descrição (quando disponível)

## 🔗 Endpoints da API

- `GET /` - Serve a página principal
- `GET /characters?name=<nome>` - Busca personagens por nome

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔗 Links Úteis

- [Marvel API Documentation](https://developer.marvel.com/docs)
- [Express.js Documentation](https://expressjs.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 👨‍💻 Autor

Desenvolvido por **Guilherme Felipe**

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!