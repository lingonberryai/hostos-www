import './App.css'
import Rive from '@rive-app/react-canvas'

export const Mascots = () => <Rive src="/mascots.riv" />

function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm">
          <Mascots />
          <div className="text-center">
            <div className="pb-2 text-2xl">Know your audience with</div>
            <div className="text-5xl font-bold">HostOS®</div>
            <div className="inline-block px-4 py-2 mt-2 bg-yellow-300 rounded-full">
              beta
            </div>
          </div>
          <div className="w-full max-w-sm pt-20 text-center">
            <div className="inline-block px-4 py-2 text-3xl text-white bg-pink-500 rounded-full fancy-button">
              Host Dashboard
            </div>
            <div className="mt-4 italic">
              <a
                href="https://airtable.com/appesvGgInpbl8ihk/pagRflb3lJ5ou7CyO/form"
                className="hover:underline hover:text-pink-500"
              >
                Sign Up to create your Host.
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-40 text-center">
        <span>このテキストは国際的な雰囲気を作り出すためにここにあります</span>{' '}
        <br />
        <br />
        <span>HostOS® is a product of </span>
        <br />
        <a
          className="font-bold hover:underline hover:text-pink-500"
          href="https://lingonberry.ai"
        >
          Lingonberry Intelligence, Inc.{' '}
        </a>
        <br />
        <a href="https://lingonberry.ai">
          <img className="inline-block w-12 mt-8" src="logo.svg" alt="" />
        </a>
      </div>
    </>
  )
}

export default App
