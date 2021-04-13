import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel ">
            <Story 
                image='https://globalgrasshopper.com/wp-content/uploads/2020/03/most-beautiful-places-to-visit-in-Japan-1000x667.jpg' 
                profileSrc='https://static.toiimg.com/photo/76729750.cms'
                title='Erick Beel'
            />
            <Story 
                image='https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/2020-09/programming.jpg' 
                profileSrc='https://i0.wp.com/www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg?resize=500%2C500&ssl=1'
                title='Sam Runner'
            />
            <Story 
                image='https://interpretacionesoniricasypsicoanalisis.files.wordpress.com/2015/08/soc3b1ar-con-viajar-3.jpg' 
                profileSrc='https://www.cnet.com/a/img/il6jwdZY19bL9QEDR5x6zNjd55Y=/0x404:828x1603/940x0/2020/05/18/ef3e4846-00d1-4b6b-8647-d876b73b6b3e/fb-avatar.jpg'
                title='Jannet Summer'
            />
            <Story 
                image='https://bariloche.org/wp-content/uploads/2015/09/cerro-catedral-extiende-temporada-invierno2015.jpg' 
                profileSrc='https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg'
                title='Tony Rich'
            />
            <Story 
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmDOela05OsIHps3EY4ZK5NhYaCSmAaK_0w&usqp=CAU' 
                profileSrc='https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg'
                title='Selena White'
            />
        </div>
    )
}

export default StoryReel
