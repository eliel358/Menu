
function goto(site){
    window.location.href = site
}
function create_post(post_name,site,code){
    const post = document.createElement('div')
    const post_title = document.createElement('p')
    const buttons = document.createElement('div')
    const goto_button = document.createElement('button')
    const gotocode_button = document.createElement('button')
    conteiner = document.getElementById('conteiner')
    
    post.appendChild(post_title)
    post.appendChild(goto_button)
    post.appendChild(gotocode_button)
    post.appendChild(buttons)

    buttons.appendChild(goto_button)
    buttons.appendChild(gotocode_button)
    conteiner.appendChild(post)


    post_title.innerHTML = post_name
    goto_button.innerHTML = 'Ir Até Lá'
    gotocode_button.innerHTML = 'Ver o Código'

    goto_button.setAttribute('onclick','goto("'+site+'")')
    gotocode_button.setAttribute('onclick','goto("'+code+'")')

    post.className = 'post'

}
create_post('Pedra Papel Tesoura','https://eliel358.github.io/Pedra-papel-tesoura/','https://github.com/eliel358/Pedra-papel-tesoura')
create_post('Lista de Tarefas','https://eliel358.github.io/To-do-list/','https://github.com/eliel358/To-do-list')
create_post('Reconhecimento de voz','https://github.com/eliel358/Speech-recognition-e-synthesis','https://github.com/eliel358/Speech-recognition-e-synthesis')
create_post('Calculadora','https://eliel358.github.io/Calculadora/','https://github.com/eliel358/Calculadora')
create_post('Contador','https://eliel358.github.io/Counter/','https://github.com/eliel358/Counter')
create_post('Relogio Digital','https://eliel358.github.io/Relogio-digital/','https://github.com/eliel358/Relogio-digital')
create_post('Calculadora de Massa Corporal','https://eliel358.github.io/Calculadora-de-massa-corporal/','https://github.com/eliel358/Calculadora-de-massa-corporal')

























