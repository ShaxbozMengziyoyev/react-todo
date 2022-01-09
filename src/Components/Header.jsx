import content from ".././Localization/content";


function Header({lang}){
  return(
    <>
    <h1>{content[lang].header}</h1>

    
  </>  
  )
}
export default Header