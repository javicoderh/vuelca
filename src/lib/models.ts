import { number, z } from "zod";
import { Decimal as DecimalPackage } from "decimal.js";

const String = z.string();
const Int = z.coerce.number().int();
const BigInt = z.coerce.bigint();
const Float = z.coerce.number();
const Boolean = z.boolean();
const DateTime = z.coerce.date();
const Decimal = z.custom<DecimalPackage>((val) => {
  if (val instanceof DecimalPackage) {
    return { success: true, data: val };
  } else {
    return { success: false, error: "Not a decimal" };
  }
});

export const UserSchema = z.object({
  id: String,
  name: String.nullable(),
  email: String.nullable(),
  emailVerified: DateTime.nullable(),
  image: String.nullable(),
  roleId: Int,
});

export const EneroEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String.nullable(),
  eslogan: String,
  mes: String,
})

export const FebreroEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String.nullable(),
  eslogan: String,
  mes: String,
})

export const MarzoEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String.nullable(),
  eslogan: String,
  mes: String,
})

export const AbrilEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String.nullable(),
  eslogan: String,
  mes: String,
})

export const MayoEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String.nullable(),
  eslogan: String,
  mes: String,
})

export const JunioEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String.nullable(),
  eslogan: String,
  mes: String,
})

export const JulioEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String.nullable(),
  eslogan: String,
  mes: String,
})

export const AgostoEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String.nullable(),
  eslogan: String,
  mes: String,
})

export const SeptiembreEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String.nullable(),
  eslogan: String,
  mes: String,
})

export const OctubreEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String.nullable(),
  eslogan: String,
  mes: String,
})

export const NoviembreEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String.nullable(),
  eslogan: String,
  mes: String,
})

export const DiciembreEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String.nullable(),
  eslogan: String,
  mes: String,
})

export const UserRoleSchema = z.object({
  id: Int,
  name: String,
});
