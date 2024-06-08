document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('passwordSection').style.display = 'block';
    document.getElementById('startBtn').style.display = 'none';
});

document.getElementById('passwordBtn').addEventListener('click', function() {
    document.getElementById('passwordInput').style.display = 'inline-block';
    document.getElementById('passwordBtn').style.display = 'none';

    document.getElementById('passwordInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (document.getElementById('passwordInput').value === 'drozd') {
                let confirmation = confirm("Czy na pewno chcesz poznać miksturę jakże magiczną?");
                if (confirmation) {
                    document.getElementById('recipeSection').style.display = 'block';
                    document.getElementById('passwordSection').style.display = 'none';
                    document.getElementById('miksturaImage').style.display = 'block';
                }
            } else {
                alert('Niepoprawne hasło!');
            }
        }
    });
});
