document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const suggestions = document.getElementById('suggestions').value;
    
    const subject = `Feedback Proyecto Mazinger Z - ${name} ${surname}`;
    const body = `Nombre: ${name}\nApellidos: ${surname}\n\nSugerencias:\n${suggestions}`;
    
    const mailtoLink = `mailto:arioseras@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Opcional: mostrar un mensaje de confirmación
    alert('¡Gracias por tu feedback! Se abrirá tu cliente de correo para completar el envío.');
});
