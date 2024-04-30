function changeBackground(color) {
    document.body.classList.remove('bg-lblue', 'bg-lgold'); // Remove all background classes
    if (color === 'lightblue') {
        document.body.classList.add('bg-lblue'); // Add the light blue background class
    } else if (color === 'lightgold') {
        document.body.classList.add('bg-lgold'); // Add the light gold background class
    }
}

// Extra Credit
// Save/load name to/from local storage
const currentName = localStorage.getItem('name');
if (currentName) {
    document.getElementById('boxName').value = currentName;
    document.getElementById('displayName').textContent = currentName;
}

document.getElementById('boxName').addEventListener('input', function() {
    let name = this.value;
    localStorage.setItem('name', name);
    document.getElementById('displayName').textContent = name;
});