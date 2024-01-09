"use client";

import { useForm } from "react-hook-form";
import { Marzo, defaultMarzoValues } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { MarzoEventosSchema, UserSchema } from "@/lib/models";
import { trpc } from "../_trpc/client";



export const MarzoEventosList = () => {
  const { register, handleSubmit, reset } = useForm<Marzo>({
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
  const updateUser = trpc.marzo.update.useMutation({
    onSuccess: () => {
      eventos.refetch();
      reset();
    },
  });
  const deleteUser = trpc.marzo.delete.useMutation({
    onSuccess: () => {
      eventos.refetch();
    },
  });

  const onSubmit = (data: Marzo) => {
    if (data.id) {
      crearEvento.mutate(data);
    } else {
      crearEvento.mutate(data);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("nombre")} />
        <button type="submit">Submit</button>
      </form>
      <br />
      <ul>
        {eventos.isLoading ? (
          <li>Loading...</li>
        ) : (
          eventos.data?.map((evento) => (
            <li key={evento.id}>
              <span>{evento.nombre}</span>|{"nombre"}
              <button
                onClick={() =>
                  reset(user, {
                    keepDefaultValues: true,
                  })
                }
              >
                Edit
              </button>
              | <button onClick={() => deleteUser.mutate(evento)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
