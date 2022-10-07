
/**
 * TtleSection
 *
 * Should be wrapped in a section tag element
 * 
 */
export const TitleSection = ({title}:{title:string}) => {

  return (
    <h2 className="common__title">{'<'+title+'/>'}</h2>
  )
}
