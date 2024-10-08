import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
//app.use('/public', express.static('./public'))
//app.use(express.static('./server/public'));      // Serve built files in production

//app.use('/scripts', express.static('./public/scripts'))
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
  })
const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:3001`)
})