import React from "react";
import Zar from './zar';
import './style.css';


export default function App (){

    const [zar, setZar] = React.useState(totZaruriNoi())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect( () => {
        const totZarSalvat =  zar.every(zar=>zar.zarSalvat)
        const primaValoare = zar[0].value
        const totAceasiValoare = zar.every(zar => zar.value === primaValoare)
        if(totZarSalvat && totAceasiValoare){
            setTenzies(true)
        }
    }, [zar])



    function random(){
        return Math.random().toString(36).substring(4, 18)
    }     
  
    function genereazaZarNou(){
        return {
            value: Math.ceil(Math.random() * 6), 
            zarSalvat: false,
            id: random()   
        }
    }

    function totZaruriNoi(){
        const zarNou = []
        for (let i = 0; i < 10; i++){
            zarNou.push(genereazaZarNou())
        }
        return zarNou   
    } 

    function rollZar (){
        if(!tenzies){
            setZar(zarVechi => zarVechi.map(zar =>{
                return zar.zarSalvat ? 
                zar :
                genereazaZarNou()
            }))
        } else {
            setTenzies(false)
            setZar(totZaruriNoi())
        }
    }

    function zarRetinut (id) {
    setZar(zarVechi => zarVechi.map(zar => {
    return zar.id === id ? 
      {...zar, zarSalvat: !zar.zarSalvat} :
       zar
         }))
    }

    const zarElements = zar.map(zar => (
    <Zar key={zar.id} value={zar.value} zarSalvat={zar.zarSalvat}
     zarRetinut={()=> zarRetinut(zar.id)} />))
    
    return (
        
        <main>
            {tenzies && alert ("You won!")}
            <h1 className="title">Tenzies</h1>
            <p className= "instructiuni">Roll until all dice are the same.</p>
            <div className="container-zar">
                {zarElements}
            </div>
            <button 
                className="roll-btn"    
                onClick={rollZar}
                
                >{tenzies ? "New Game" : "Roll"}</button>
            
        </main>
        
    )
}


 