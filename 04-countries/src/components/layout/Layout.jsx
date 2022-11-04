import Menu from '../common/Menu'

export default function Layout ({ children }) {
  return (
    <>
      <Menu />
      {children}
      <footer>
        <p className='text-white text-center'>Silvye CG</p>
      </footer>
    </>
  )
}
