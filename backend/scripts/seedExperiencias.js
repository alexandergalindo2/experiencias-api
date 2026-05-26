// Script simple para importar experiencias desde data/cv.json al endpoint /api/experiencias
// Uso: node scripts/seedExperiencias.js

import fs from 'fs'
import path from 'path'

const file = path.resolve('data', 'cv.json')
const API_URL = process.env.API_URL || 'http://localhost:4000/api/experiencias'

async function post(url, body) {
  // Usamos fetch (Node 18+). Si tu Node es anterior instala axios o actualiza Node.
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  return res
}

async function main() {
  if (!fs.existsSync(file)) {
    console.error('No se encontró', file)
    process.exit(1)
  }

  const raw = fs.readFileSync(file, 'utf-8')
  const data = JSON.parse(raw)

  if (!Array.isArray(data.experiencias) || data.experiencias.length === 0) {
    console.log('No hay experiencias para importar. Añade items en data/cv.json -> "experiencias" y vuelve a ejecutar.')
    return
  }

  for (const exp of data.experiencias) {
    try {
      const res = await post(API_URL, exp)
      if (res.ok) {
        const json = await res.json()
        console.log('Importada experiencia:', json._id || json)
      } else {
        const txt = await res.text()
        console.error('Error al importar', exp.cargo, res.status, txt)
      }
    } catch (err) {
      console.error('Error de conexión al API:', err.message)
    }
  }
}

main()
