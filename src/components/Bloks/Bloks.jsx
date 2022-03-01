import React from 'react'
import b from '../Bloks/Bloks.module.scss'
import f from '../../image/boxsho/box.jpg'
import '../../App.css'
const Bloks = () => {
    return (

        <div class='container'>
           <div class='card'>
               <div class='imgbox'>
               <img src={f}/>
               </div>
                    <div class='content'>
                        <h2>Мужские часы</h2>
                        <button class='btns'><a href="">Подробне</a></button>
                        <p>
                        <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                     
                    </div>
                </div>

                <div class='card'>
               <div class='imgbox'>
               <img src={f}/>
               </div>
                    <div class='content'>
                        <h2>Женские часы</h2>
                        <p class='container'>gggggghgjhgjf</p>
                    </div>
                </div>
                <div class='card'>
               <div class='imgbox'>
               <img src={f}/>
               </div>
                    <div class='content'>
                        <h2>Спортивные часы</h2>
                        <p class='container'>gggggghgjhgjf</p>
                    <button class='btns'><a href="">ghgh</a></button>
                    </div>
                </div>

           </div>
        


        // <div className={b.container}>

        //     <div>

        //         <div className={b.card}>

        //             <img className={b.foto} src={f}/>
        //             <div className={b.info}>
        //                 <h2>About me</h2>
        //                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus libero voluptatum sit! Sequi facere in tempora quibusdam mollitia provident aut?</p>
        //             </div>
        //         </div>
        //     </div>

        //     <div>
        //         <div className={b.card}>
        //             <div className={b.image}></div>
        //             <div className={b.info}>
        //                 <h2>About me</h2>
        //                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus libero voluptatum sit! Sequi facere in tempora quibusdam mollitia provident aut?</p>
        //             </div>
        //         </div>
        //     </div>

        //     <div>
        //         <div className={b.card}>
        //             <div className={b.image}></div>
        //             <div className={b.info}>
        //                 <h2>About me</h2>
        //                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus libero voluptatum sit! Sequi facere in tempora quibusdam mollitia provident aut?</p>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}

export default Bloks