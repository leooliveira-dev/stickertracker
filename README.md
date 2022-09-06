# Sticker Tracker - FIFA World Cup 2022
Projeto demonstração de um registrador de coleção de figurinhas da Copa do Mundo FIFA 2022.

**DISCLAIMER**: FIFA World Cup é uma marca registrada e este projeto de estudo não tem vínculo algum com ela. Além disso, nenhum dado sensível de usuário é enviado a nenhum serviço externo ou terceiro, e os detalhes técnicos relacionados a isso podem ser validados no código deste repositório.

## Recursos
O usuário tem acesso a uma lista de todas as figurinhas onde ele pode marcar quais já possui e quais possui repetidas, para consultar mais facilmente quando precisar.

## Detalhes Técnicos
O scaffolding do projeto foi feito utilizando **Vite** e **Yarn**, com a configuração para utilizar **Vue 3** e **TypeScript**. Para a parte de estilo, foi utilizado **TailwindCSS** através da abstração do **DaisyUI**. Como é um projeto demonstrativo, todos os inputs são armazenados no armazenamento local do navegador e disponibilizados para a aplicação por uma store do **Pinia**. O deploy é feito no **Netlify**.

## Problemas conhecidos e potenciais melhorias
Se o projeto fosse continuar de fato como um projeto comercial em produção, algumas práticas e paradigmas precisariam ser adotados para garantir segurança da informação e manutenabilidade de código.

- Implementação de estrutura de back-end para gravar e consumir dados
- Autenticação de usuário
- Validação server-side de inputs

Isso levaria a melhorias claras, como a possibilidade de compartilhar o perfil como um link que outras pessoas poderiam consultar sua coleção e suas informações de contato para combinar a troca de figurinhas. A falta de um back-end e uma abstração de usuário impossibilita fazer isso de forma segura, mas o layout já é preparado para isso com uma tela de perfil e links sociais.

Além disso, esta coleção de figurinhas possui uma coleção paralela de figurinhas extras, comumente vendidas em vez de trocadas, que não estão sendo cobertas neste projeto.

## Contribuição e reuso
Como mencionado anteriormente, o projeto é apenas um estudo e não possui nenhum vínculo com a marca oficial, muito menos algum fim lucrativo. Portanto, sinta-se a vontade para forkar o projeto para estudar e reutilizar algum trecho de código, bem como enviar sugestões de melhoria via Pull Request.

Obrigado por visitar o repositório!