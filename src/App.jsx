import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
const url =  import.meta.env.VITE_PROJECT_URL
const api = import.meta.env.VITE_API_KEY
const supabase = createClient(
 url,
  api
)



import './App.css'

function App() {
 
console.log('hello')
  return (
    <div className="App">
      <Auth supabaseClient={supabase} />
      {/* <label htmlFor="email">Email:</label>
    <input type="text" name='email'/><br />
    <label htmlFor="password">Password:</label>
    <input type="text" name='password'/> */}
    </div>
  )
}

export default App
