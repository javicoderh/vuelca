import { z } from "zod";
import { MarzoEventosSchema, UserRoleSchema, UserSchema } from "./models";

export type User = z.infer<typeof UserSchema>;
export const defaultUserValues: User = {
  id: "",
  name: null,
  email: null,
  emailVerified: null,
  image: null,
  roleId: 2,
} as const;

export type MarzoEventos = z.infer<typeof MarzoEventosSchema>;
export const defaultMarzoValues: MarzoEventos = {
  id: 0,
  nombre: '',
  fecha: 0,
  descripcion: '',
  categoria: '',
  contacto: '',
  ruta: '',
  imagen1: '',
  eslogan: '',
  mes: '',
} as const;

export type UserRole = z.infer<typeof UserRoleSchema>;
export const defaultUserRoleValues: UserRole = {
  id: 0,
  name: "",
} as const;

  