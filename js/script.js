function goto(site){
    window.location.href = site
}
class card{
    constructor(card_name,site,git_hub_link){
        this.card_name = card_name
        
        this.git_hub_link = 'https://github.com/eliel358/'+git_hub_link
        
        if(site.substr(8,19) != 'github.com/eliel358'){
            this.site = 'https://eliel358.github.io/'+site
        }else{
            this.site = site
        }
        const post = document.createElement('div')
        const post_title = document.createElement('p')
        const buttons = document.createElement('div')
        const gotocode_button = document.createElement('button')
        var conteiner = document.getElementById('conteiner')
        
        if(site.substr(8,19) != 'github.com/eliel358'){
            const goto_button = document.createElement('button')
            goto_button.innerHTML = 'Ir Até Lá'
            goto_button.setAttribute('onclick','goto("'+this.site+'")')
            buttons.appendChild(goto_button)
            post.appendChild(post_title,buttons,gotocode_button,goto_button)
        }else{
            post.appendChild(post_title,buttons,gotocode_button)
        }

        post.appendChild(buttons)

        buttons.appendChild(gotocode_button)
        conteiner.appendChild(post)

        post_title.innerHTML = this.card_name
        gotocode_button.innerHTML = 'Ver o Código'
        
        gotocode_button.setAttribute('onclick','goto("'+this.git_hub_link+'")')

        post.className = 'post'
        
    }
}
card_var = new card('Jogo da velha de terminal','https://github.com/eliel358/Jogo-da-velha-Terminal','Jogo-da-velha-Terminal')
card_var = new card('Calculadora de Código de Cores de Resistores','Calculadora-de-Codigo-de-Cores-de-Resistores','Calculadora-de-Codigo-de-Cores-de-Resistores')
card_var = new card('Pedra Papel Tesoura','Pedra-papel-tesoura/','Pedra-papel-tesoura')
card_var = new card('Menu de projetos','Menu','Menu')
card_var = new card('Tradutor','https://github.com/eliel358/Tradutor-python','Tradutor-python')
card_var = new card('Relogio Digital','Relogio-digital/','Relogio-digital')
card_var = new card('Contador','Counter/','Counter')
card_var = new card('Calculadora','Calculadora/','Calculadora')
card_var = new card('Lista de Tarefas','To-do-list/','To-do-list')
card_var = new card('Reconhecimento de voz','https://github.com/eliel358/Speech-recognition-e-synthesis','Speech-recognition-e-synthesis')
card_var = new card('Calculadora de Massa Corporal','Calculadora-de-massa-corporal/','Calculadora-de-massa-corporal')
card_var = new card('Pong','Pong','Pong')