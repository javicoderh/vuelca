"use client";

import { useForm } from "react-hook-form";
import { JunioEventos, defaultJunioValues } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { JunioEventosSchema } from "@/lib/models";
import '../../globals.css'
import { trpc } from "../../_trpc/client";
import Link from "next/link";
import Image from "next/image";
import calendario from '../../../../public/timetable.svg';
import edit from '../../../../public/edit.jpg';
import plus from '../../../../public/plus.png'
import borrar from '../../../../public/delete.png'
import Modal from "../modal";
import { useState } from "react";
import Modal2 from "../modal2";
import { useMediaQuery } from "react-responsive";


export const JunioEventosList = () => {
  const { register, handleSubmit, reset } = useForm<JunioEventos>({
    defaultValues: defaultJunioValues,
    resolver: zodResolver(JunioEventosSchema),
  });

  const mobile = useMediaQuery({ maxWidth: 768 });
  const [modalVisible, setModalVisible] = useState(false);
  const [view, setView] = useState<boolean>(false);
  const [button, setButton ] = useState<boolean>(true);
  const [selectedEventDetails, setSelectedEventDetails] = useState<JunioEventos | null>(null);

  const [selectedEvent, setSelectedEvent] = useState<JunioEventos | null>(null);
  let back = '/calendario'
  const eventos = trpc.junio.readAll.useQuery();

  const toggleButtonAndView = async () => {
    console.log('toggleButtonAndView called');
    setView((prevView) => !prevView);
    setButton((prevButton) => !prevButton);    
  };


  const crearEvento = trpc.junio.create.useMutation({
    onSuccess: () => {
      eventos.refetch();
      reset();
    },
  });
  
  const updateJunio = trpc.junio.update.useMutation({
    onSuccess: async () => {
      eventos.refetch();
      reset();
    },
  });  

  const deleteJunio = trpc.junio.delete.useMutation({
    onSuccess: () => {
      eventos.refetch();
    },
  });

  const onSubmit = (data: JunioEventos) => {
    if (data.id) {
      updateJunio.mutate(data);
      toggleButtonAndView()
    } else {
      crearEvento.mutate(data);
      toggleButtonAndView()
    }
  };  

  return (
    <div className="eventos-mensuales-container">
      <h1>Formulario ingreso de eventos Junio</h1>
      <div className="block md:hidden">      
      {button ? <button className="text-white viewButton bg-black w-[70px]" onClick={toggleButtonAndView}> mostrar </button> : <button className="text-white viewButton bg-black w-[70px]" onClick={toggleButtonAndView}> ocultar </button> }
      {mobile && view && ( 
    <form className="grid md:hidden eventos-form-mobile" onSubmit={handleSubmit(onSubmit)}>
    <div className="input-format">
    <label htmlFor="nombre">nombre</label>
    <input placeholder="Máximo 30 caracteres..." type="text" maxLength={30} {...register("nombre")} />
    </div>
    <div className="input-format">
    <label htmlFor="fecha">fecha</label>
    <input placeholder="Solo el número del día..." defaultValue={''} type="number" max={31} {...register("fecha")} />
    </div>
    <div className="input-format">
    <label htmlFor="descripcion">descripción</label>
    <input placeholder="Describe tu evento..." type="text" {...register("descripcion")} />
    </div>
    <div className="input-format">
    <label htmlFor="categoria">categoría</label>
    <input placeholder="Categoría del evento..." type="text" {...register("categoria")} />
    </div>
    <div className="input-format">
    <label htmlFor="">contacto</label>
    <input placeholder="Mail de contacto..." type="text" {...register("contacto")} />
    </div>
    <div className="input-format">
    <label htmlFor="ruta">ruta</label>
    <input placeholder="Link página del evento..." type="text" {...register("ruta")} />
    </div>
    <div className="input-format">
    <label htmlFor="imagen1">imagen1</label>
    <input placeholder="Link de imagen para el evento..." type="text" {...register("imagen1")} />
    </div>
    <div className="input-format">
    <label htmlFor="eslogan">slogan</label>
    <input placeholder="Slogan del evento..." type="text" {...register("eslogan")} />
    </div>
    <div className="input-format">
    <label htmlFor="mes">mes</label>
    <input placeholder="Default" defaultValue={'junio'} type="text" {...register("mes")} /> 
    </div>
    <br />       
    <button type="submit">Ingresar</button>
  </form> 
)}
  </div>
     {!mobile && ( <form className="hidden md:grid eventos-form" onSubmit={handleSubmit(onSubmit)}>
    <div className="input-format">
    <label htmlFor="nombre">nombre</label>
    <input placeholder="Máximo 30 caracteres..." type="text" maxLength={30} {...register("nombre")} />
    </div>
    <div className="input-format">
    <label htmlFor="fecha">fecha</label>
    <input placeholder="Solo el número del día..." defaultValue={''} type="number" max={31} {...register("fecha")} />
    </div>
    <div className="input-format">
    <label htmlFor="descripcion">descripción</label>
    <input placeholder="Describe tu evento..." type="text" {...register("descripcion")} />
    </div>
    <div className="input-format">
    <label htmlFor="categoria">categoría</label>
    <input placeholder="Categoría del evento..." type="text" {...register("categoria")} />
    </div>
    <div className="input-format">
    <label htmlFor="">contacto</label>
    <input placeholder="Mail de contacto..." type="text" {...register("contacto")} />
    </div>
    <div className="input-format">
    <label htmlFor="ruta">ruta</label>
    <input placeholder="Link página del evento..." type="text" {...register("ruta")} />
    </div>
    <div className="input-format">
    <label htmlFor="imagen1">imagen1</label>
    <input placeholder="Link de imagen para el evento..." type="text" {...register("imagen1")} />
    </div>
    <div className="input-format">
    <label htmlFor="eslogan">slogan</label>
    <input placeholder="Slogan del evento..." type="text" {...register("eslogan")} />
    </div>
    <div className="input-format">
    <label htmlFor="mes">mes</label>
    <input placeholder="Default" defaultValue={'junio'} {...register("mes")} /> 
    </div>
    <br />       
    <button type="submit">Ingresar</button>
  </form>
  )}
      <br />
      <h2 className="mb-5">Eventos enero:</h2>
      <ul className="hidden md:grid mensuales-container scrollable inner-proximos-eventos-ul">
        {eventos.isLoading ? (
          <li>Loading...</li>
        ) : (
          eventos.data?.map((evento) => (            
            <li className="maxw" key={evento.id}>
              <a key={evento.nombre} href={evento.ruta} target="_blank">
              <span className="p-[3px] maxh2">{evento.nombre}</span>|{" "}
              <div className='flex flex-row'>
                    <h3 className='pl-[6px] maxh3'>{evento.mes} - {evento.fecha}</h3>
                    <Image className='evento-img' src={calendario} width={100} height={100} alt='evt' /> 
                </div>
              <p className="text-white maxp">{evento.descripcion}</p>
              </a>
              <button
                className="mr-3"
                onClick={() => {
                  setSelectedEvent(evento);
                  setModalVisible(true);
                  setSelectedEventDetails(evento);
                }}
              >
                <Image className='modificar-evento-button mt-3' src={plus} width={40} height={40} alt="Ver detalles" />
              </button>
              <button
                onClick={async () => {
                  console.log('Before toggleButtonAndView');
                  await toggleButtonAndView();
                  console.log('After toggleButtonAndView');
                  reset(evento, {
                    keepDefaultValues: true,
                  });
               }}
              >
              <Image className='modificar-evento-button mt-3' src={edit} width={40} height={40} alt='edit' />
              </button>
              | <button onClick={() => deleteJunio.mutate(evento)}>
              <Image className='modificar-evento-button mt-3' src={borrar} width={40} height={40} alt='edit' />
              </button>             
            </li>
          ))
        )}
        <Link href={back}>
            <button className="boton-calendario mt-[20px]">atras</button>
        </Link>
      </ul>
      <ul className="grid md:hidden scrollable inner-proximos-eventos-ul-mobile">
        {eventos.isLoading ? (
          <li>Loading...</li>
        ) : (
          eventos.data?.map((evento) => (            
            <li className="maxw-mobile h-[350px]" key={evento.id}>
              <Link key={evento.nombre} href={evento.ruta} target="_blank">
              <span className="p-[3px] maxh2-mobile">{evento.nombre}</span>|{" "}
              <div className='flex flex-row'>
                    <h3 className='pl-[6px] maxh3'>{evento.mes} - {evento.fecha}</h3>
                    <Image className='evento-img' src={calendario} width={100} height={100} alt='evt' /> 
                </div>
              <p className="text-white maxp">{evento.descripcion}</p>
              </Link>
              <button
                className="mr-3"
                onClick={() => {
                  setSelectedEvent(evento);
                  setModalVisible(true);
                  setSelectedEventDetails(evento);
                }}
              >
                <Image className='modificar-evento-button mt-3' src={plus} width={40} height={40} alt="Ver detalles" />
              </button>
              <button
  onClick={async () => {
    await toggleButtonAndView();
    reset(evento, {
      keepDefaultValues: true,
    });
  }}
>
              <Image className='modificar-evento-button mt-3' src={edit} width={40} height={40} alt='edit' />
              </button>
              | <button onClick={() => deleteJunio.mutate(evento)}>
              <Image className='modificar-evento-button mt-3' src={borrar} width={40} height={40} alt='edit' />
              </button>             
            </li>
          ))
        )}
        <Link href={back}>
            <button className="boton-calendario mt-[20px]">atras</button>
        </Link>
      </ul>
      {modalVisible && selectedEventDetails && (
  <Modal2
    nombre={selectedEventDetails.nombre}
    descripcion={selectedEventDetails.descripcion}
    imagen1={selectedEventDetails.imagen1}
    contacto={selectedEventDetails.contacto}
    fecha={selectedEventDetails.fecha}
    mes ={selectedEventDetails.mes}
    eslogan={selectedEventDetails.eslogan}
    onClose={() => setModalVisible(false)} 
  />
)}
    </div>
  );
};
