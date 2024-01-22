import { z } from "zod";
import { MarzoEventosSchema, EneroEventosSchema, FebreroEventosSchema, AbrilEventosSchema, MayoEventosSchema, JunioEventosSchema, JulioEventosSchema, AgostoEventosSchema, SeptiembreEventosSchema, OctubreEventosSchema, NoviembreEventosSchema, DiciembreEventosSchema, UserRoleSchema, UserSchema } from "./models";

export type User = z.infer<typeof UserSchema>;
export const defaultUserValues: User = {
  id: "",
  name: null,
  email: null,
  emailVerified: null,
  image: null,
  roleId: 2,
} as const;

export type EneroEventos = z.infer<typeof EneroEventosSchema>;
export const defaultEneroValues: EneroEventos = {
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

export type FebreroEventos = z.infer<typeof FebreroEventosSchema>;
export const defaultFebreroValues: FebreroEventos = {
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

export type AbrilEventos = z.infer<typeof AbrilEventosSchema>;
export const defaultAbrilValues: AbrilEventos = {
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

export type MayoEventos = z.infer<typeof MayoEventosSchema>;
export const defaultMayoValues: MayoEventos = {
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

export type JunioEventos = z.infer<typeof JunioEventosSchema>;
export const defaultJunioValues: JunioEventos = {
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

export type JulioEventos = z.infer<typeof JulioEventosSchema>;
export const defaultJulioValues: JulioEventos = {
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

export type AgostoEventos = z.infer<typeof AgostoEventosSchema>;
export const defaultAgostoValues: AgostoEventos = {
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

export type SeptiembreEventos = z.infer<typeof SeptiembreEventosSchema>;
export const defaultSeptiembreValues: SeptiembreEventos = {
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

export type OctubreEventos = z.infer<typeof OctubreEventosSchema>;
export const defaultOctubreValues: OctubreEventos = {
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

export type NoviembreEventos = z.infer<typeof NoviembreEventosSchema>;
export const defaultNoviembreValues: NoviembreEventos = {
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

export type DiciembreEventos = z.infer<typeof DiciembreEventosSchema>;
export const defaultDiciembreValues: DiciembreEventos = {
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

  