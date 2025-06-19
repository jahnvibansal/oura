import { useState } from 'react'
import './App.css'
import Header from './components/Header'

export default function App() {
  const [token, setToken] = useState('')
  const [userData, setUserData] = useState<Record<string, unknown> | null>(null)

  const handleConnect = async () => {
    try {
    const response = await fetch(
      'https://api.ouraring.com/v2/usercollection/personal_info',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      setUserData(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Header />
      <main className="welcome">
        <h2>Welcome to myOura</h2>
        <p>
          Enter your personal access token from{' '}
          <a
            href="https://cloud.ouraring.com/personal-access-tokens"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oura
          </a>{' '}
          to connect your account.
        </p>
        <input
          type="text"
          placeholder="Enter Oura access token"
          className="token-input"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button className="link-button" onClick={handleConnect}>
          Link Oura Ring
        </button>
        {userData && (
          <div className="data-grid">
            {Object.entries(userData).map(([key, value]) => (
              <div key={key} className="grid-item">
                <strong>{key}</strong>
                <div>{JSON.stringify(value)}</div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
