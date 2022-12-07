import React, { useState } from 'react'
import { TitleSection } from '../common/components/TitleSection';

export const ExperienceTabs = () => {
    const [currentTab, setCurrentTab] = useState<string>('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Apiux',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            tabTitle: 'Tab 2',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 3,
            tabTitle: 'Tab 3',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        },
        {
            id: 4,
            tabTitle: 'Tab 4',
            title: 'Title 4',
            content: 'Contenido de tab 4.'
        }
    ];
    const handleTabClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        const id = e.currentTarget.id
        console.log(id)
        setCurrentTab(id);
    }
    return (
        <section id='experience'>
            <TitleSection title="Experience" />
            <div className="experience__container">
                <div className="experience__tabs">
                    {
                        tabs.map((tab,i) =>
                        <button key={i} id={`${tab.id}`} disabled={currentTab=== `${tab.id}`} className={` ${currentTab=== `${tab.id}`&& 'test' }`} type='button' onClick={(handleTabClick)}>
                            {tab.tabTitle}
                        </button>
                        )
                    }
                    
                </div>
                <div className="experience__tab-content">
                    {
                        tabs.map((tab,i) =>
                        <div key={i}>
                            {currentTab === `${tab.id}` && <h2>{tab.content}</h2>}
                        </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
