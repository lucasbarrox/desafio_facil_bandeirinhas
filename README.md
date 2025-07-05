## Desafio Fácil: Decoração de Festa com Bandeirinhas 🎉

### O Desafio Proposto

A ideia desse desafio é criar uma página web interativa onde o usuário pode digitar um número, e o sistema gera automaticamente uma fileira de bandeirinhas coloridas, com cores alternadas! Pense naquelas festas juninas, com um monte de bandeirinhas balançando no ar. 🎊

**O que eu tinha que usar:**

* **Input e Botão:** Para o usuário inserir o número e acionar a geração das bandeirinhas.
* **`innerHTML`:** Para manipular o conteúdo da página e adicionar as bandeirinhas dinamicamente.
* **`for` loop:** Essencial para criar a quantidade certa de bandeirinhas, uma por uma.
* **Estilos:** Usar CSS para deixar as bandeirinhas bonitas e com cores alternadas. Podia ser com emojis ou, como eu fiz, criar as bandeirinhas usando CSS puro!

### Minha Solução (Desafio Fácil)

Eu optei por criar as bandeirinhas usando CSS puro, o que deu um toque bem legal! A página pede para o usuário digitar um número entre 1 e 50, e quando ele clica no botão "Gerar Bandeirinhas" (ou aperta Enter), um monte de bandeirinhas coloridas aparece na tela. As cores se alternam entre laranja, verde, amarelo, rosa e azul, dando um visual bem festivo!

#### Como Funciona (por trás dos panos):

1.  **HTML (`index.html`):**
    * Estrutura básica da página com um cabeçalho, uma área para o input e o botão, e um container onde as bandeirinhas serão exibidas.
    * Um input do tipo `number` para o usuário digitar a quantidade de bandeirinhas.
    * Um botão para acionar a função de gerar.
    * Um `div` com o id `bandeirinhas-container` que será o "palco" para as bandeirinhas.

2.  **CSS (`style.css`):**
    * Estilos gerais para o corpo da página, cabeçalho, áreas de input e resultados.
    * A cereja do bolo: o estilo para a classe `.bandeirinha`! Usei `border-left`, `border-right` e `border-bottom` com bordas transparentes e uma borda inferior colorida para criar o formato triangular.
    * O `::after` pseudoelemento foi usado para criar a "base" da bandeirinha, dando a impressão de que ela está pendurada.
    * Tem também uns estilos para responsividade, para ficar legal no celular!

3.  **JavaScript (`script.js`):**
    * Captura os elementos do DOM: o input, o botão e o container das bandeirinhas.
    * Define um array `cores` com as cores do tema junino que serão usadas nas bandeirinhas.
    * A função `gerarBandeirinhas()`:
        * Limpa o container antes de adicionar novas bandeirinhas.
        * Pega o número digitado pelo usuário e faz uma validação básica (entre 1 e 50).
        * Usa um `for` loop para criar a quantidade de bandeirinhas que o usuário pediu.
        * Para cada bandeirinha, um novo `div` com a classe `bandeirinha` é criado.
        * A mágica das cores alternadas acontece com `i % cores.length` que garante que as cores do array sejam usadas em sequência.
        * As bandeirinhas são adicionadas ao `bandeirinhas-container`.
        * Adicionei uma pequena animação de `fadeIn` para as bandeirinhas aparecerem suavemente!
    * Event Listeners: um para o clique do botão e outro para quando o usuário aperta "Enter" no campo de input.

---

Sinta-se à vontade para explorar o código e ver como tudo se encaixa! Se tiver alguma dúvida ou sugestão, pode abrir uma issue ou fazer um pull request. 😊