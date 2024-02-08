"use client";

import { useForm } from "react-hook-form";
import { AgostoEventos, EmpresasSalud, defaultEmpresasSaludValues } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmpresasSaludSchema } from "@/lib/models";
import '../../../globals.css'
import { trpc } from "../../../_trpc/client";
import Link from "next/link";
import Image from "next/image";
import calendario from '../../../../../public/timetable.svg';
import edit from '../../../../../public/edit.jpg';
import plus from '../../../../../public/plus.png'
import borrar from '../../../../../public/delete.png'
import { useState } from "react";
import Modal2 from "../../../ui/modal2";
import { useMediaQuery } from "react-responsive";
import Modal3 from "@/app/ui/modal3";


export const SaludEmpresasForm = () => {
  const { register, handleSubmit, reset } = useForm<EmpresasSalud>({
    defaultValues: defaultEmpresasSaludValues,
    resolver: zodResolver(EmpresasSaludSchema),
  });

  const mobile = useMediaQuery({ maxWidth: 768 });
  const [modalVisible, setModalVisible] = useState(false);
  const [view, setView] = useState<boolean>(false);
  const [button, setButton ] = useState<boolean>(true);
  const [selectedEventDetails, setSelectedEventDetails] = useState<EmpresasSalud | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EmpresasSalud | null>(null);
  let back = '/calendario'
  const eventos = trpc.empresasSalud.readAll.useQuery();

  const toggleButtonAndView = async () => {
    console.log('toggleButtonAndView called');
    setView((prevView) => !prevView);
    setButton((prevButton) => !prevButton);    
  };


  const crearEmpresa = trpc.empresasSalud.create.useMutation({
    onSuccess: () => {
      eventos.refetch();
      reset();
    },
  });
  
  const updateEmpresa = trpc.empresasSalud.update.useMutation({
    onSuccess: async () => {
      eventos.refetch();
      reset();
    },
  });  

  const deleteEmpresa = trpc.empresasSalud.delete.useMutation({
    onSuccess: () => {
      eventos.refetch();
    },
  });

  const onSubmit = (data: EmpresasSalud) => {
    if (data.id) {
      updateEmpresa.mutate(data);
      toggleButtonAndView()
    } else {
      crearEmpresa.mutate(data);
      toggleButtonAndView()
    }
  };  

  return (
    <div className="eventos-mensuales-container">
      <h1>Formulario creación de empresas</h1>
      <div className="block md:hidden">      
      {button ? <button className="text-white viewButton bg-black w-[70px]" onClick={toggleButtonAndView}> mostrar </button> : <button className="text-white viewButton bg-black w-[70px]" onClick={toggleButtonAndView}> ocultar </button> }
      {mobile && view && ( 
    <form className="grid md:hidden eventos-form-mobile" onSubmit={handleSubmit(onSubmit)}>
    <div className="input-format">
    <label htmlFor="nombre">nombre</label>
    <input placeholder="Máximo 30 caracteres..." type="text" maxLength={30} {...register("nombreempresa")} />
    </div>
    <div className="input-format">
    <label htmlFor="fecha">descripcion empresa</label>
    <input placeholder="Solo el número del día..." defaultValue={''} type='text' max={80} {...register("descripcion")} />
    </div>
    <div className="input-format">
    <label htmlFor="descripcion">mail</label>
    <input placeholder="Describe tu evento..." type="text" {...register("mail")} />
    </div>
    <div className="input-format">
    <label htmlFor="categoria">telefono</label>
    <input placeholder="Categoría del evento..." type="text" {...register("telefono")} />
    </div>
    <div className="input-format">
    <label htmlFor="">imagen1 Url</label>
    <input placeholder="Mail de contacto..." type="text" {...register("imagen1")} />
    </div>
    <div className="input-format">
    <label htmlFor="ruta">imagen2 Url</label>
    <input placeholder="Link página del evento..." type="text" {...register("imagen2")} />
    </div>
    <div className="input-format">
    <label htmlFor="imagen1">logo</label>
    <input placeholder="Link de imagen para el evento..." type="text" {...register("logo")} />
    </div>
    <div className="input-format">
    <label htmlFor="eslogan">categoría</label>
    <select className="formselect" {...register("categoria")}> 
    <option selected value="biocosmetica">biocosmetica</option>
    <option value="yoga">yoga</option>
    <option value="tarot">tarot y otras magias</option>
    <option value="limpieza">limpieza del hogar</option>
    <option value="medicinachina">medicina china</option>
    <option value="terapeutas">terapeutas</option>
    <option value="ayurveda">ayurveda</option>
    <option value="atrologia">astrología</option>
    </select>
    </div>
    <div className="input-format">
    <label htmlFor="mes">ruta</label>
    <input placeholder="Default" defaultValue={'agosto'} type="text" {...register("ruta")} /> 
    </div>
    <div className="input-format">
    <label htmlFor="mes">contador de clicks</label>
    <input placeholder="Default" defaultValue={0} type="text" {...register("clickscount")} /> 
    </div>
    <br />       
    <button type="submit">crear empresa</button>
  </form> 
)}
  </div>
      {!mobile &&(<form className="hidden md:grid eventos-form" onSubmit={handleSubmit(onSubmit)}>
    <div className="input-format">
    <label htmlFor="nombre">nombre</label>
    <input placeholder="Máximo 30 caracteres..." type="text" maxLength={30} {...register("nombreempresa")} />
    </div>
    <div className="input-format">
    <label htmlFor="fecha">descripcion empresa</label>
    <input placeholder="Solo el número del día..." defaultValue={''} type="text" max={80} {...register("descripcion")} />
    </div>
    <div className="input-format">
    <label htmlFor="descripcion">mail</label>
    <input placeholder="Describe tu evento..." type="text" {...register("mail")} />
    </div>
    <div className="input-format">
    <label htmlFor="categoria">telefono</label>
    <input placeholder="Categoría del evento..." type="text" {...register("telefono")} />
    </div>
    <div className="input-format">
    <label htmlFor="">imagen1 Url</label>
    <input placeholder="Mail de contacto..." type="text" {...register("imagen1")} />
    </div>
    <div className="input-format">
    <label htmlFor="ruta">imagen2 Url</label>
    <input placeholder="Link página del evento..." type="text" {...register("imagen2")} />
    </div>
    <div className="input-format">
    <label htmlFor="imagen1">logo Url</label>
    <input placeholder="Link de imagen para el evento..." type="text" {...register("logo")} />
    </div>
    <div className="input-format">
    <label htmlFor="eslogan">categoria</label>
    <select className="formselect" {...register("categoria")}> 
    <option selected value="biocosmetica">biocosmetica</option>
    <option value="yoga">yoga</option>
    <option value="tarot">tarot y otras magias</option>
    <option value="limpieza">limpieza del hogar</option>
    <option value="medicinachina">medicina china</option>
    <option value="terapeutas">terapeutas</option>
    <option value="ayurveda">ayurveda</option>
    <option value="atrologia">astrología</option>
    </select>
    </div>
    <div className="input-format">
    <label htmlFor="mes">ruta</label>
    <input placeholder="Default"  {...register("ruta")} /> 
    </div>
    <div className="input-format">
    <label htmlFor="mes">contador de clicks</label>
    <input placeholder="Default" {...register("clickscount")} /> 
    </div>
    <br />       
    <button type="submit">crear empresa</button>
  </form>
)}
      <br />
      <h2 className="mb-5">Empresas Salud</h2>
      <ul className="hidden md:grid mensuales-container scrollable inner-proximos-eventos-ul">
        {eventos.isLoading ? (
          <li>Loading...</li>
        ) : (
          eventos.data?.map((evento) => (            
            <li className="maxw" key={evento.id}>
              <a key={evento.nombreempresa} href={evento.ruta} target="_blank">
              <span className="p-[3px] maxh2">{evento.nombreempresa}</span>|{" "}
              <div className='flex flex-row'>
                    <h3 className='pl-[6px] maxh3'>{evento.descripcion}</h3>
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
              | <button onClick={() => deleteEmpresa.mutate(evento)}>
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
              <Link key={evento.nombreempresa} href={evento.ruta} target="_blank">
              <span className="p-[3px] maxh2-mobile">{evento.nombreempresa}</span>|{" "}
              <div className='flex flex-row'>
                    <h3 className='pl-[6px] maxh3'>{evento.descripcion}</h3>
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
              | <button onClick={() => deleteEmpresa.mutate(evento)}>
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
  <Modal3
    nombre={selectedEventDetails.nombreempresa}
    descrip={selectedEventDetails.descripcion}
    email={selectedEventDetails.mail}
    tel={selectedEventDetails.telefono}
    img1={selectedEventDetails.imagen1}
    img2 ={selectedEventDetails.imagen2}
    log={selectedEventDetails.logo}
    catgoria={selectedEventDetails.categoria}
    route={selectedEventDetails.ruta}
    clickscounter={selectedEventDetails.clickscount}
    onClose={() => setModalVisible(false)} 
  />
)}
    </div>
  );
};
