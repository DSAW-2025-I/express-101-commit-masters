const express = require('express');
const app = express();
const PORT = 3000;

const students = {
    1: {
        name: "Martin Ignacio",
        lastName: "Pereira Alcalde",
        email: "martinpeal@unisabana.edu.co",
        id: "0000320193"
    },
    2: {
        name: "Juan Felipe",
        lastName: "Cardenas Gonzalez",
        email: "juancardgon@unisabana.edu.co",
        id: "0000322206"
    }
};

// Endpoint para obtener información de un estudiante
app.get('/user-info/:id', (req, res) => {
    const { id } = req.params;

    if (students[id]) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(students[id], null, 2));
    } else {
        res.status(404).json({ error: "Estudiante no encontrado" });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
