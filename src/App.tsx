import './App.css'
import Header from './components/Header'

export default function App() {
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
        />
      </main>
    </>
  )
}
