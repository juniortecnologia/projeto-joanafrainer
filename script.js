document.getElementById('sobre').addEventListener('click', function(event) {
   // event.preventDefault(); // Previne o comportamento padrão do link
    var section = document.getElementById('joana-frainer');
    section.style.display = (section.style.display === 'none') ? 'flex' : 'flex'; // Alterna entre none e block
  });
  