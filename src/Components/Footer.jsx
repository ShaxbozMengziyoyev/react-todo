import content from ".././Localization/content";

function Footer({lang}){
  return(
    <>
    <h1>{content[lang].footer}</h1>
  </>  
  )
}
export default Footer