
import { TitleSection } from '../common/components/TitleSection';
import { TimeLineItem } from './components/TimeLineItem';

export const Experience = () => {
  
 
    return (
        <section id='experience' >
            <TitleSection title="Experience" />
            <div className="experience__container-show">

                <div className="experience__container">
                {/* TODO: TERMINAR DE HACER EL MOBILE DE EL TIMELINE */}
                <TimeLineItem 
                        title='Probando'
                        description={ `***Overview***
                        The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor used to create and edit the content and return valid HTML markup or markdown (MD) of the content. The editor provides a standard toolbar to format content using its commands. Modular library features to load the necessary functionality on demand. The toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operation, HTML view, and more.
                      
                        ***Key features***
                        - *Mode*: Provides IFRAME and DIV mode.
                        - *Module*: Modular library to load the necessary functionality on demand.
                        - *Toolbar*: Provide a fully customizable toolbar.
                        - *Editing*: HTML view to edit the source directly for developers.
                        - *Third-party Integration*: Supports to integrate third-party library.
                        - *Preview*: Preview the modified content before saving it.
                        - *Tools*: Handling images, hyperlinks, video, uploads and more.
                        - *Undo and Redo*: Undo/redo manager.
                        - *Lists*: Creates bulleted and numbered list.`}
                        from='2021'
                        to="2022"
                />
                <TimeLineItem 
                        title='Probando'
                        description='Desarrollé el Front-end de un gestor documental el cual permite almacenar, ordenar y buscar documentos
                        mediante la ayuda de servicios de GCP ML.
                         Desarrollo y mantención de sitios administrativos para el sector público, realizando migración a versiones más
                        nuevas en Vue.js, además de crear nuevas funcionalidades que ayudan a agilizar los procesos internos.
                         Desarrollo y mejora de sitio de administración de dispositivos IoT, el cual se encargaba de dar información de
                        mediciones, mediante diferentes librerías de React logré crear gráficos complejos que ayudaban a un mejor
                        entendimiento de los datos entregados por estos dispositivos'
                        from='2021'
                        to="2022"
                />
                <TimeLineItem 
                        title='Probando'
                        description='Desarrollé el Front-end de un gestor documental el cual permite almacenar, ordenar y buscar documentos
                        mediante la ayuda de servicios de GCP ML.
                         Desarrollo y mantención de sitios administrativos para el sector público, realizando migración a versiones más
                        nuevas en Vue.js, además de crear nuevas funcionalidades que ayudan a agilizar los procesos internos.
                         Desarrollo y mejora de sitio de administración de dispositivos IoT, el cual se encargaba de dar información de
                        mediciones, mediante diferentes librerías de React logré crear gráficos complejos que ayudaban a un mejor
                        entendimiento de los datos entregados por estos dispositivos'
                        from='2021'
                        to="2022"
                />
                <TimeLineItem 
                        title='Probando'
                        description='Desarrollé el Front-end de un gestor documental el cual permite almacenar, ordenar y buscar documentos
                        mediante la ayuda de servicios de GCP ML.
                         Desarrollo y mantención de sitios administrativos para el sector público, realizando migración a versiones más
                        nuevas en Vue.js, además de crear nuevas funcionalidades que ayudan a agilizar los procesos internos.
                         Desarrollo y mejora de sitio de administración de dispositivos IoT, el cual se encargaba de dar información de
                        mediciones, mediante diferentes librerías de React logré crear gráficos complejos que ayudaban a un mejor
                        entendimiento de los datos entregados por estos dispositivos'
                        from='2021'
                        to="2022"
                />
                    <TimeLineItem 
                        title='Probando'
                        description='Desarrollé el Front-end de un gestor documental el cual permite almacenar, ordenar y buscar documentos
                        mediante la ayuda de servicios de GCP ML.
                         Desarrollo y mantención de sitios administrativos para el sector público, realizando migración a versiones más
                        nuevas en Vue.js, además de crear nuevas funcionalidades que ayudan a agilizar los procesos internos.
                         Desarrollo y mejora de sitio de administración de dispositivos IoT, el cual se encargaba de dar información de
                        mediciones, mediante diferentes librerías de React logré crear gráficos complejos que ayudaban a un mejor
                        entendimiento de los datos entregados por estos dispositivos'
                        from='2021'
                        to="2022"
                />
                
                
                </div>
                <div className="experience__show-more"></div>
            </div>
        </section>
    )
}
