
/**
 * Represents a single item in a timeline.
 * 
 * @interface PropsTimeLineItem
 * @property {string} from - The start date of the timeline item.
 * @property {string} to - The end date of the timeline item.
 * @property {string} title - The title of the timeline item.
 * @property {string} description - The description of the timeline item.
 */
interface PropsTimeLineItem{
    from:string;
    to:string;
    title:string;
    description:string;

}
/**
 * Renders a single item in a timeline.
 * 
 * @param {PropsTimeLineItem} props - The properties of the timeline item.
 * @returns {JSX.Element} A JSX element representing a single timeline item.
 */
export const TimeLineItem = (props:PropsTimeLineItem) => {
    const {from,to,title,description} = props;
    return (
    <div className="experience__item">
            <div className="experience__milestone">{to} <br></br> {from}</div>
            <div className="experience__item-content">

                <h3>{title}</h3>
                <p>
                    {description}
                </p>
            </div>

    </div>
    )
    }
