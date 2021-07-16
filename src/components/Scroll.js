export const Scroll = ({children}) => {
  return(
    <div style={{overflowY : 'scroll', border: '1px solid black', height:'1000px'}}>
      {children}
    </div>
  )
}