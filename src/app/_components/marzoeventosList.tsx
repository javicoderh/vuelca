"use client";

import { useForm } from "react-hook-form";
import { MarzoEventos, defaultMarzoValues } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { MarzoEventosSchema } from "@/lib/models";
import '../globals.css'
import { trpc } from "../_trpc/client";


export const MarzoEventosList = () => {
  const { register, handleSubmit, reset } = useForm<MarzoEventos>({
    defaultValues: defaultMarzoValues,
    resolver: zodResolver(MarzoEventosSchema),
  });

  const eventos = trpc.marzo.readAll.useQuery();
  const crearEvento = trpc.marzo.create.useMutation({
    onSuccess: () => {
      eventos.refetch();
      reset();
    },
  });
  const updateMarzo = trpc.marzo.update.useMutation({
    onSuccess: () => {
      eventos.refetch();
      reset();
    },
  });
  const deleteMarzo = trpc.marzo.delete.useMutation({
    onSuccess: () => {
      eventos.refetch();
    },
  });

  const onSubmit = (data: MarzoEventos) => {
    if (data.id) {
      updateMarzo.mutate(data);
    } else {
      crearEvento.mutate(data);
    }
  }; 

  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nombre">nombre</label>
        <input type="text" {...register("nombre")} />
        <label htmlFor="fecha">fecha</label>
        <input type="text" {...register("fecha")} />
        <label htmlFor="descripcion">descripcion</label>
        <input type="text" {...register("descripcion")} />
        <label htmlFor="categoria">categoria</label>
        <input type="text" {...register("categoria")} />
        <label htmlFor="">contacto</label>
        <input type="text" {...register("contacto")} />
        <label htmlFor="ruta">ruta</label>
        <input type="text" {...register("ruta")} />
        <label htmlFor="imagen1">imagen1</label>
        <input type="text" {...register("imagen1")} />
        <label htmlFor="eslogan">eslogan</label>
        <input type="text" {...register("eslogan")} />
        <label htmlFor="mes">mes</label>
        <input type="text" {...register("mes")} />
        
        <button type="submit">Submit</button>
      </form>
      <br />
      <ul>
        {eventos.isLoading ? (
          <li>Loading...</li>
        ) : (
          eventos.data?.map((evento) => (
            <li key={evento.id}>
              <span>{evento.nombre}</span>|{" "}
              <button
                onClick={() =>
                  reset(evento, {
                    keepDefaultValues: true,
                  })
                }
              >
                Edit
              </button>
              | <button onClick={() => deleteMarzo.mutate(evento)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
