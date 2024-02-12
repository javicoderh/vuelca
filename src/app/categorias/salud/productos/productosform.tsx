"use client";

import { useForm } from "react-hook-form";
import { ProductossSalud, defaultProductosSaludValues } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductosSaludSchema } from "@/lib/models";
import '../../../globals.css'
import { trpc } from "../../../_trpc/client";
import Link from "next/link";
import Image from "next/image";
import calendario from '../../../../../public/timetable.svg';
import edit from '../../../../../public/edit.jpg';
import plus from '../../../../../public/plus.png'
import borrar from '../../../../../public/delete.png'
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ProductosSalud } from "@/app/lib/definitions";
import Modal4 from "@/app/ui/modal4";


export const SaludProductosForm = () => {
  const { register, handleSubmit, reset } = useForm<ProductossSalud>({
    defaultValues: defaultProductosSaludValues,
    resolver: zodResolver(ProductosSaludSchema),
  });

  const mobile = useMediaQuery({ maxWidth: 768 });
  const [modalVisible, setModalVisible] = useState(false);
  const [view, setView] = useState<boolean>(false);
  const [button, setButton ] = useState<boolean>(true);
  const [selectedEventDetails, setSelectedEventDetails] = useState<ProductosSalud | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<ProductossSalud | null>(null);
  let back = '/calendario'
  const eventos = trpc.productosSalud.readAll.useQuery();

  const toggleButtonAndView = async () => {
    console.log('toggleButtonAndView called');
    setView((prevView) => !prevView);
    setButton((prevButton) => !prevButton);    
  };


  const crearProducto = trpc.productosSalud.create.useMutation({
    onSuccess: () => {
      eventos.refetch();
      reset();
    },
  });
  
  const updateProducto = trpc.productosSalud.update.useMutation({
    onSuccess: async () => {
      eventos.refetch();
      reset();
    },
  });  

  const deleteProducto = trpc.productosSalud.delete.useMutation({
    onSuccess: () => {
      eventos.refetch();
    },
  });

  const onSubmit = (data: ProductosSalud) => {
    if (data.id) {
      updateProducto.mutate(data);
      toggleButtonAndView()
    } else {
      crearProducto.mutate(data);
      toggleButtonAndView()
    }
  };  

  return (
    <div className="eventos-mensuales-container">
      <h1>Formulario creación de productos</h1>
      <div className="block md:hidden">      
      {button ? <button className="text-white viewButton bg-black w-[70px]" onClick={toggleButtonAndView}> mostrar </button> : <button className="text-white viewButton bg-black w-[70px]" onClick={toggleButtonAndView}> ocultar </button> }
      {mobile && view && ( 
    <form className="grid md:hidden eventos-form-mobile" onSubmit={handleSubmit(onSubmit)}>
    <div className="input-format">
    <label htmlFor="nombre">nombre</label>
    <input placeholder="Máximo 30 caracteres..." type="text" maxLength={30} {...register("nombre")} />
    </div>
    <div className="input-format">
    <label htmlFor="fecha">descripcion empresa</label>
    <input placeholder="Solo el número del día..." defaultValue={''} type='text' max={80} {...register("descripcion")} />
    </div>
    <div className="input-format">
    <label htmlFor="descripcion">precio Clp</label>
    <input placeholder="Describe tu evento..." type="number" {...register("precio")} />
    </div>
    <div className="input-format">
    <label htmlFor="categoria">stock</label>
    <input placeholder="Categoría del evento..." type="number" {...register("stock")} />
    </div>
    <div className="input-format">
    <label htmlFor="">contador clicks</label>
    <input placeholder="Mail de contacto..." type="number" {...register("clickscount")} />
    </div>
    <div className="input-format">
    <label htmlFor="ruta">Logo Url</label>
    <input placeholder="Link página del evento..." type="text" {...register("imagen")} />
    </div>
    <div className="input-format">
    <label htmlFor="imagen1">ruta</label>
    <input placeholder="Link de imagen para el evento..." type="text" {...register("ruta")} />
    </div>
    <div className="input-format">
    <label htmlFor="eslogan">Empresa</label>
    <select className="formselect" {...register("empresa")}> 
    <option selected value="angy">angy</option>
    <option value="kundakini">kundakini</option>
    </select>
    </div>
    <br />       
    <button type="submit">crear producto</button>
  </form> 
)}
  </div>
      {!mobile &&(<form className="hidden md:grid eventos-form" onSubmit={handleSubmit(onSubmit)}>
    <div className="input-format">
    <label htmlFor="nombre">nombre</label>
    <input placeholder="Máximo 30 caracteres..." type="text" maxLength={30} {...register("nombre")} />
    </div>
    <div className="input-format">
    <label htmlFor="fecha">descripcion empresa</label>
    <input placeholder="Solo el número del día..." defaultValue={''} type='text' max={80} {...register("descripcion")} />
    </div>
    <div className="input-format">
    <label htmlFor="descripcion">precio Clp</label>
    <input placeholder="Describe tu evento..." type="number" {...register("precio")} />
    </div>
    <div className="input-format">
    <label htmlFor="categoria">stock</label>
    <input placeholder="Categoría del evento..." type="text" {...register("stock")} />
    </div>
    <div className="input-format">
    <label htmlFor="">contador clicks</label>
    <input placeholder="Mail de contacto..." type="number" {...register("clickscount")} />
    </div>
    <div className="input-format">
    <label htmlFor="ruta">Logo Url</label>
    <input placeholder="Link página del evento..." type="text" {...register("imagen")} />
    </div>
    <div className="input-format">
    <label htmlFor="imagen1">ruta</label>
    <input placeholder="Link de imagen para el evento..." type="text" {...register("ruta")} />
    </div>
    <div className="input-format">
    <label htmlFor="eslogan">Empresa</label>
    <select className="formselect" {...register("empresa")}> 
    <option selected value="angy">angy</option>
    <option value="kundakini">kundakini</option>
    </select>
    </div>
    <br />       
    <button type="submit">crear producto</button>
    <br />       
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
              <a key={evento.nombre} href={evento.ruta} target="_blank">
              <span className="p-[3px] maxh2">{evento.nombre}</span>|{" "}
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
              | <button onClick={() => deleteProducto.mutate(evento)}>
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
              | <button onClick={() => deleteProducto.mutate(evento)}>
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
  <Modal4
    nom={selectedEventDetails.nombre}
    descr={selectedEventDetails.descripcion}
    stck={selectedEventDetails.stock}
    prcio={selectedEventDetails.precio}
    imgen={selectedEventDetails.imagen}
    empr={selectedEventDetails.empresa}
    rut={selectedEventDetails.ruta}
    clickscounter={selectedEventDetails.clickscount}
    onClose={() => setModalVisible(false)} 
  />
)}
    </div>
  );
};
