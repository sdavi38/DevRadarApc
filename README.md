# DevRadarApc
Projeto feito com ReactJS, React Native e Node.js.

Web: Para cadastrar os Devs, utilizando a Api do GitHub para obter dados como: foto,nome e bio. No lado direito da parte do cadastro aparecem os Devs já cadastrados.
![image](https://user-images.githubusercontent.com/55156476/72847532-8818dd00-3c81-11ea-8c60-737fa64bd1cf.png)

Mobile: Onde é possível pesquisar por tecnologia e os Devs que cadastraram essa teconologia aparecem no mapa
![image](https://user-images.githubusercontent.com/55156476/72847804-0d03f680-3c82-11ea-874f-35ce2d462542.png)

Ao clicar na foto do Dev, abre um Callout com as informações do Dev obtidas pela api do GitHub e as tecnologias cadastradas.
Ao clicar no Callout, abre o perfil do GitHub daquele usuário, dentro do próprio aplicativo.
![image](https://user-images.githubusercontent.com/55156476/72848288-09bd3a80-3c83-11ea-8f69-8f8deedaf8d5.png)

A aplicação conta com WebSockets para atualização em tempo real.
Caso uma busca por tecnologia seja feita e um novo Dev for cadastrado, automaticamente esse novo Dev aparece na busca.
