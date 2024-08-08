function addNote() {
    
    const noteText = document.getElementById('noteText').value;

    if (noteText.trim() === '') {
        alert('Por favor, digite uma nota.');
        return;
    }

    const noteItem = document.createElement('li');

    noteItem.textContent = noteText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = function() {
        noteItem.remove();
    };

    noteItem.appendChild(deleteButton);


    document.getElementById('notesList').appendChild(noteItem);

    
    document.getElementById('noteText').value = '';
}