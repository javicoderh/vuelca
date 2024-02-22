import React, { useState } from "react";
import '../../globals.css'
import { trpc } from "../../_trpc/client";
import { z } from "zod";
import { EneroEventos } from "@/lib/types";


const EneroEventosSchema = z.object({
  id: z.number(),
  nombre: z.string(),
  fecha: z.number(),
  descripcion: z.string(),
  categoria: z.string(),
  contacto: z.string(),
  ruta: z.string(),
  imagen1: z.string().nullable(),
  eslogan: z.string(),
  mes: z.string(),
});

const Marzo2 = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [events, setEvents] = useState<EneroEventos[]>([]);

  const dia2 = trpc.marzo.readAll.useQuery({
    mes: "marzo"
  });

  
  const handleClickDay = (day: number) => {
    if (selectedDay === day) {
     
      setSelectedDay(null);
    } else {
      setSelectedDay(day);
      const dayEvents = dia2.data ? dia2.data.filter(event => event.fecha === day) : [];
      setEvents(dayEvents);
    }
  };

  return (
    <div className="mes-container">
      <h1  className="mes-tit">Marzo</h1>
      <div className="mes2">  
      <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(1)}
        >
          1
        </div>   
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(2)}
        >
          2
        </div>        
        <div className="dia2"
        onClick={() => handleClickDay(3)}
        >3
        </div>
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(4)}
        >
          4
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(5)}
        >
          5
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(6)}
        >
          6
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(7)}
        >
          7
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(8)}
        >
          8
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(9)}
        >
          9
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(10)}
        >
          10
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(11)}
        >
          11
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(12)}
        >
          12
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(13)}
        >
          13
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(14)}
        >
          14
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(15)}
        >
          15
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(16)}
        >
          16
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(17)}
        >
          17
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(18)}
        >
          18
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(19)}
        >
          19
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(20)}
        >
          20
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(21)}
        >
          21
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(22)}
        >
          22
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(23)}
        >
          23
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(24)}
        >
          24
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(25)}
        >
          25
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(26)}
        >
          26
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(27)}
        >
          27
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(28)}
        >
          28
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(29)}
        >
          29
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(30)}
        >
          30
        </div>  
        <div 
          className={`dia2${selectedDay === 2 ? ' selected' : ''}`} 
          onClick={() => handleClickDay(31)}
        >
          31
        </div>  
        
      </div>
     
      {selectedDay !== null && (
        <div className="eventosDiarios">
          <h2>Eventos {selectedDay} marzo</h2>
          <ul>
            {events.map(event => (
              <li key={event.id}>
                <h2>{event.nombre}</h2>
                <p>{event.descripcion}</p>
                <br />
                <p>contacto : {event.contacto}</p>
            </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Marzo2;
