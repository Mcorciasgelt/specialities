const express = require("express")
const app = express()

PORT = 3000

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];

function filterSpeciality(specialty)  {
    return usersData.filter(user => user.specialty === specialty)
}

app.get('/', (req, res) => {
    
    res.send(`
      <h1>¡Estás en la página principal!</h1>
      <a href="/marketing">Ir a Marketing</a><br>
      <a href="/developers">Ir a Developers</a><br>
      <a href="/qas">Ir a QAs</a><br>
      <a href="/ventas">Ir a Ventas</a><br>
    
      <p>Total usuarios: ${usersData.length}</p>
    `
    );
  })

  app.get('/marketing', (req, res) => {

    const marketingUsers = filterSpeciality('marketing')

    res.send(`
      <h1>¡Estás en la página Marketing!</h1>
      <a href="/">Ir a Principal</a><br>
      <a href="/marketing">Ir a Marketing</a><br>
      <a href="/developers">Ir a Developers</a><br>
      <a href="/qas">Ir a QAs</a><br>
      <a href="/ventas">Ir a Ventas</a>

            <p>Total usuarios: ${marketingUsers.length}</p>
        <ul>
            ${marketingUsers.map(user => `<li>${user.name}, ${user.age} años</li>`).join('')}
        </ul>
    `
    );
  })

  app.get('/developers', (req, res) => {
    
    const developersgUsers = filterSpeciality('developers')

    res.send(`
      <h1>¡Estás en la página Developers!</h1>
      <a href="/">Ir a Principal</a><br>
      <a href="/marketing">Ir a Marketing</a><br>
      <a href="/developers">Ir a Developers</a><br>
      <a href="/qas">Ir a QAs</a><br>
      <a href="/ventas">Ir a Ventas</a>

            <p>Total usuarios: ${developersgUsers.length}</p>
        <ul>
            ${developersgUsers.map(user => `<li>${user.name}, ${user.age} años</li>`).join('')}
        </ul>
    `
    );
  })

  app.get('/qas', (req, res) => {

    const qasUsers = filterSpeciality('QAs')

    res.send(`
      <h1>¡Estás en la página QAs!</h1>
      <a href="/">Ir a Principal</a><br>
      <a href="/marketing">Ir a Marketing</a><br>
      <a href="/developers">Ir a Developers</a><br>
      <a href="/qas">Ir a QAs</a><br>
      <a href="/ventas">Ir a Ventas</a>

            <p>Total usuarios: ${qasUsers.length}</p>
        <ul>
            ${qasUsers.map(user => `<li>${user.name}, ${user.age} años</li>`).join('')}
        </ul>
    `
    );
  })

  app.get('/ventas', (req, res) => {

    const ventasUsers = filterSpeciality('ventas')

    res.send(`
      <h1>¡Estás en la página Ventas!</h1>
      <a href="/">Ir a Principal</a><br>
      <a href="/marketing">Ir a Marketing</a><br>
      <a href="/developers">Ir a Developers</a><br>
      <a href="/qas">Ir a QAs</a><br>
      <a href="/ventas">Ir a Ventas</a>

            <p>Total usuarios: ${ventasUsers.length}</p>
        <ul>
            ${ventasUsers.map(user => `<li>${user.name}, ${user.age} años</li>`).join('')}
        </ul>
    `
    );
  })

  app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
  });