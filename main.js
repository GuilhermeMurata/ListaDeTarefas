
$('form').on('submit', function(e){
    e.preventDefault();
    
    addLinha();
})

function addLinha() {
    const nomeTarefa = $('#nova-tarefa').val();
    const novoItem = $('<li></li>');
    $(`<li>${nomeTarefa}</li>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
}
