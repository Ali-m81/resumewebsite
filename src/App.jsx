

import Layout from './layout/layout'

// MY Routes
import Homepages from './components/homePages'
import Aboutme from './components/aboutme'
import ServisesList from './components/servisesList'
import Project from './components/project'


function App() {
  document.title = "HOME PAGE"


  // const h = () => {
  //   window.scrollTo({
  //     top: 1385,
  //     behavior: 'smooth'
  //   })
  // }
  return (
    <>
      <Layout>
        <Homepages />
        <Aboutme />
        <ServisesList />
        <Project />
      </Layout>
    </>
  )
}

export default App
