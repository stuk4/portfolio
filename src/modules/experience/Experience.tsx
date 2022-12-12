import React, { useState } from 'react'
import { TitleSection } from '../common/components/TitleSection';

export const Experience = () => {
  
    const tabs = [
        {
            id: 1,
            tabTitle: 'Apiux Tecnología',
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
            tabTitle: 'Duoc UC',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        },
        {
            id: 4,
            tabTitle: 'Tutorial',
            title: 'Title 4',
            content: 'Contenido de tab 4.'
        }
    ];
 
    return (
        <section id='experience' >
            <TitleSection title="Experience" />
            <div className="experience__container">

                <div className="experience__item">
                    <div className="experience__milestone">2022 <br></br> 2021</div>
                    <div className="experience__item-content">

                        <h3>Probando</h3>
                        <p>
                        Desarrollé el Front-end de un gestor documental el cual permite almacenar, ordenar y buscar documentos
mediante la ayuda de servicios de GCP ML.
 Desarrollo y mantención de sitios administrativos para el sector público, realizando migración a versiones más
nuevas en Vue.js, además de crear nuevas funcionalidades que ayudan a agilizar los procesos internos.
 Desarrollo y mejora de sitio de administración de dispositivos IoT, el cual se encargaba de dar información de
mediciones, mediante diferentes librerías de React logré crear gráficos complejos que ayudaban a un mejor
entendimiento de los datos entregados por estos dispositivos
                        </p>
                    </div>
               
                </div>
                <div className="experience__item">
                    <div className="experience__milestone">2022 <br></br> 2021</div>
                    <div className="experience__item-content">
                        <h3>Probando</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Hic temporibus rerum at eos numquam aut dolores. Eaque quod odio
                            laudantium ab saepe. Cupiditate nostrum dolor expedita molestias sequi magni, 
                            corrupti officia alias sit optio sed, possimus blanditiis fuga ex mollitia. Nesciunt 
                            laborum, ea ut a voluptates dicta maiores corrupti ipsum enim porro possimus suscipit 
                            inventore consequuntur tenetur exercitationem iusto magnam. Culpa impedit error dicta 
                            ad dignissimos accusantium porro quia neque unde nam illum, minima tenetur quod 
                            fugiat doloremque asperiores facere debitis repellat reiciendis modi. Cum molestias
                            quibusdam deserunt ut obcaecati impedit eum asperiores doloribus minus praesentium 
                            ab ipsa magni mollitia earum ipsum nam maiores voluptatem laboriosam minima perferendis 
                            incidunt, exercitationem veritatis possimus. Neque numquam rerum molestiae maiores 
                            perferendis nisi aliquam, tempore doloremque veniam totam debitis inventore iste 
                            ipsa quisquam sequi. Perferendis temporibus totam, consectetur odit iusto alias
                            architecto. Itaque, mollitia.
                        </p>
                    </div>
               
                </div>
                <div className="experience__item">
                    <div className="experience__milestone">2022 <br></br> 2021</div>
                    <div className="experience__item-content">
                        <h3>Probando</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Hic temporibus rerum at eos numquam aut dolores. Eaque quod odio
                            laudantium ab saepe. Cupiditate nostrum dolor expedita molestias sequi magni, 
                            corrupti officia alias sit optio sed, possimus blanditiis fuga ex mollitia. Nesciunt 
                            laborum, ea ut a voluptates dicta maiores corrupti ipsum enim porro possimus suscipit 
                            inventore consequuntur tenetur exercitationem iusto magnam. Culpa impedit error dicta 
                            ad dignissimos accusantium porro quia neque unde nam illum, minima tenetur quod 
                            fugiat doloremque asperiores facere debitis repellat reiciendis modi. Cum molestias
                            quibusdam deserunt ut obcaecati impedit eum asperiores doloribus minus praesentium 
                            ab ipsa magni mollitia earum ipsum nam maiores voluptatem laboriosam minima perferendis 
                            incidunt, exercitationem veritatis possimus. Neque numquam rerum molestiae maiores 
                            perferendis nisi aliquam, tempore doloremque veniam totam debitis inventore iste 
                            ipsa quisquam sequi. Perferendis temporibus totam, consectetur odit iusto alias
                            architecto. Itaque, mollitia.
                        </p>
                    </div>
               
                </div>
            </div>
        </section>
    )
}
